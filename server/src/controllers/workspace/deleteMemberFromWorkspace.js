const { Users, Workspaces } = require('../../db');

const deleteMemberFromWorkspace = async (req, res) => {
    
    const { userId, workspaceId } = req.params;

    try {
        // Verificar que el usuario y el workspace existan
        const user = await Users.findByPk(userId);
        const workspace = await Boards.findByPk(workspaceId);
        if (!user || !workspace) {
            return res.status(404).json({ error: "User or workspace not found" });
        }

        // Eliminar la asociación del usuario con el workspace
        await user.removeWorkspace(workspace);

        // Devolver una respuesta exitosa indicando que el usuario ha sido eliminado del tablero.
        return res.status(200).json({ message: "Member removed from workspace successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteMemberFromWorkspace;