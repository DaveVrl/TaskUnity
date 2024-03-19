const { Users , Workspaces } = require('../../db');

const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await Users.findByPk(id);
        const userWorkspaces = await user.getWorkspaces();

        // Filtro los Workspace en los que se es Miembro y Admin
        const memberWorkspaces = userWorkspaces.filter(el => el.dataValues.created_by !== Number(id));

        // Recorro cada workspace al que pertenece el usuario y limpio la data
        const deleteDataWorkspaces = memberWorkspaces.map( async el => {     
            
            if(el.dataValues.user_workspaces.rol === 'admin') {
                const adminsWorkspace = [...el.admins_id];
                const filteredAdmins = adminsWorkspace.filter( adminId => adminId !== Number(id));
                await el.update({ admins_id: filteredAdmins });
            }

            const arrayMembersId = [...el.members_id];
            const filteredMembers = arrayMembersId.filter( memberId => memberId !== Number(id)) 
            await el.update({ members_id: filteredMembers });
            
        });
        
        // Elimino Workspaces del Usuario con la tabla intermedia incluída
        const deleteWorkspaces = await Workspaces.destroy({
            where:{ created_by:id }
        });

        // Elimino usuario de la tabla de Users
        const deleteUserAccount = await Users.destroy({
            where: { id:id }
        });

        if (deleteUserAccount === 1) {
            return res.status(200).json({message:'User deleted successfully.'});
        } else {
            return res.status(400).json({error: 'Could not delete user.'})
        }
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = deleteUser;