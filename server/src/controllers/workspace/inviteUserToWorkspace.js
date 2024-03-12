const { Users, Workspaces } = require('../../db');

const inviteUserToWorkspace = async (req, res) => {
    
    const { userId, workspaceId } = req.params;

    try {
        // Verificar que el usuario y el workspace existan
        const user = await Users.findByPk(userId);
        const workspace = await Workspaces.findByPk(workspaceId);
        if (!user || !workspace) {
            return res.status(404).json({ error: "User or workspace not found" });
        }
        
        // Obtener el array actual de miembros y agregar la nueva ID de usuario invitado
        const membersId = [...workspace.members_id];
        const isMember = membersId.includes(Number(userId));
        if(isMember) return res.status(400).json({ error: 'User is already a member'});

        // Asociar el usuario con el workspace y establecer el rol como 'member'
        await user.addWorkspace(workspace, { through: { role: 'member' } });

        
        // Pusheo id del nuevo member al array de members_id y actualizo DB
        membersId.push(userId);
        await workspace.update({ members_id: membersId });
        return res.status(200).json({ message: "User invited successfully" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = inviteUserToWorkspace;