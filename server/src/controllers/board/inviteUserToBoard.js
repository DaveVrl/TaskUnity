const { Users, Boards } = require('../../db');

const inviteUserToBoard = async (req, res) => {
    
    const { userId, boardId } = req.params;

    try {
        // Verificar que el usuario y el tablero existan
        const user = await Users.findByPk(userId);
        const board = await Boards.findByPk(boardId);
        if (!user || !board) {
            return res.status(404).json({ error: "User or board not found" });
        }

        // Asociar el usuario con el tablero y establecer el rol como 'member'
        await user.addBoard(board, { through: { role: 'member' } });

        // Devolver una respuesta exitosa
        return res.status(200).json({ message: "User invited successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = inviteUserToBoard;