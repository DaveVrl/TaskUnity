const { Workspaces, Boards } = require('../../db');

const createBoard = async (req, res) => {

    const { workspaceId } = req.params;
    const { title, description } = req.body;

    try {
        // Verificar si la workspace existe
        const workspace = await Workspaces.findByPk(workspaceId);
        if (!workspace) {
            return res.status(404).json({ error: "Workspace not found" });
        }

        // Crear la Board asociada a la Workspace
        const newBoard = await Boards.create({
            title,
            description
        });

        await workspace.addBoard(newBoard);

        return res.status(201).json(newBoard);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createBoard;