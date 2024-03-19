const { Users, Workspaces } = require('../../db');

const deleteMemberFromWorkspace = async (req, res) => {
    
    const { userId, workspaceId } = req.params;

    try {
        // Verifico que el usuario y el workspace existan
        const user = await Users.findByPk(userId);
        if(!user) return res.status(404).json({error: 'User not found'});

        const workspace = await Workspaces.findByPk(workspaceId);
        if (!workspace) return res.status(404).json({ error: "Workspace not found" });

        // Verifico que userId sea miembro del Workspace
        const membersWorkspace = [...workspace.members_id];
        const isMember = membersWorkspace.includes(Number(userId));
        if(!isMember) return res.status(400).json({ error: 'The user is not a member'});

        // Impido que se elimine al Owner mediante id guardada en created_by
        const ownerId = workspace.created_by;
        if( Number(userId) === ownerId ) return res.status(400).json({error: 'Cannot delete project owner'})

        // Verifico si userId es Admin del Workspace
        const adminsWorkspace = [...workspace.admins_id];
        const isAdmin = adminsWorkspace.includes(Number(userId));
        // En caso de ser Admin elimino su id del Array admins_id
        if(isAdmin) {
            const filteredAdmins = adminsWorkspace.filter( el => el !== Number(userId));
            await workspace.update({ admins_id: filteredAdmins });
        }

        // Elimino id del miembro en el Array de members_id
        const arrayFiltrado = membersWorkspace.filter( el => el !== Number(userId) );
        await workspace.update({ members_id: arrayFiltrado });

        // Eliminar la asociación del usuario con el workspace
        await user.removeWorkspace(workspace);

        // Devolver una respuesta exitosa indicando que el usuario ha sido eliminado del tablero.
        return res.status(200).json({ message: "Member removed from workspace successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteMemberFromWorkspace;


