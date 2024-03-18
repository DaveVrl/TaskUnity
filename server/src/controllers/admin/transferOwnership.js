const { Workspaces , Users } = require('../../db');

const transferOwnership = async (req , res) => {
    
    try {

        const { workspaceId , userId , ownerId } = req.params;

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
        const userResult = userWorkspaces.find( el => el.dataValues.id === Number(workspaceId));
        
        // Si es admin, debo quitarlo del Array de admins_id para evitar conflictos
        if(userResult.dataValues.user_workspaces.rol === 'admin') {
            const adminsWorkspace = [...workspace.admins_id];
            const filteredAdmins = adminsWorkspace.filter( el => el !== Number(userId));
            await workspace.update({ admins_id: filteredAdmins });
        }

        // Modifico el rol en esta linea
        await userResult.dataValues.user_workspaces.update({ rol: 'owner' });
        // Actualizo created_by con id de nuevo owner
        await workspace.update({ created_by: userId });


        // Obtengo owner con la tabla de work_spaces
        const owner = await Users.findByPk(ownerId);
        const ownerWorkspaces = await owner.getWorkspaces();

        const ownerResult = ownerWorkspaces.find( el => el.dataValues.id === Number(workspaceId));
        await ownerResult.dataValues.user_workspaces.update({ rol: 'member' });

        return res.status(200).json('Ownership transferred successfully.');
        
    } catch (error) {
        
        return res.status(500).json({error:error.message});
    }
};

module.exports = transferOwnership;