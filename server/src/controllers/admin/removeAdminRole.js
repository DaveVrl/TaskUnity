const { Workspaces , Users } = require('../../db');

const removeAdminRole = async (req , res) => {
    
    try {

        const { workspaceId , userId } = req.params;

        // Compruebo que existe workspace
        const workspace = await Workspaces.findByPk(workspaceId);
        if(!workspace) return res.status(404).json({error: 'Workspace not found'});
        
        // Compruebo que el miembro pertenece al workspace
        const membersWorkspace = [...workspace.members_id];
        const isMember = membersWorkspace.includes(Number(userId));
        if(!isMember) return res.status(400).json({ error: 'The user is not a member of the workspace'});

        // Obtengo usuario con la tabla de work_spaces
        const user = await Users.findByPk(userId);
        const userWorkspaces = await user.getWorkspaces();

        // Busco el workspace correspondiente en el Array
        const result = userWorkspaces.find( el => el.dataValues.id === Number(workspaceId));
        // Si no es admin, no se puede remover
        if(result.dataValues.user_workspaces.rol !== 'admin') return res.status(400).json({ error: 'User is not an admin'});

        // Modifico el rol en esta linea
        await result.dataValues.user_workspaces.update({ rol: 'member' });

        // Remuevo id del usuario del array de admins_id y actualizo DB
        const adminsWorkspace = [...workspace.admins_id];
        const filteredAdmins = adminsWorkspace.filter( el => el !== Number(userId));
        await workspace.update({ admins_id: filteredAdmins });

        return res.status(200).json("Rol successfully removed");

    } catch (error) {

        return res.status(500).json({error:error.message});

    }
};

module.exports = removeAdminRole;