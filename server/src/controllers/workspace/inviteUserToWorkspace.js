const { Users, Workspaces } = require('../../db');


const inviteUserToWorkspace = async (req, res) => {

    try {

        const { workspaceId } = req.params;
        const { username , email } = req.body;

        if (!username && !email) {
            return res.status(400).json({ error: "Please provide either username or email" });
        }

        let user;

        if (username) {
            user = await Users.findOne({ where: { username: username } });
        } else {
            user = await Users.findOne({ where: { email: email } });
        }

        const workspace = await Workspaces.findByPk(workspaceId);
        if (!user || !workspace) {
            return res.status(404).json({ error: "User or workspace not found" });
        }

        const userId = user.id;

        // Obtener el array actual de miembros y agregar la nueva ID de usuario invitado
        const membersId = [...workspace.members_id];
        const isMember = membersId.includes(Number(userId));
        if(isMember) return res.status(400).json({ error: 'User is already a member'});

        // Asociar el usuario con el workspace y establecer el rol como 'member'
        await user.addWorkspace(workspace, { through: { rol: 'member' } });

        
        // Pusheo id del nuevo member al array de members_id y actualizo DB
        membersId.push(userId);
        await workspace.update({ members_id: membersId });
        return res.status(200).json({ message: "User invited successfully" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = inviteUserToWorkspace;