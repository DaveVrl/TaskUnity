const { Users, Boards } = require('../../db');

const deleteMemberFromBoard = async (req, res) => {
    
    const { userId, boardId } = req.params;

    try {
        // Verificar que el usuario y el tablero existan
        const user = await Users.findByPk(userId);
        const board = await Boards.findByPk(boardId);
        if (!user || !board) {
            return res.status(404).json({ error: "User or board not found" });
        }

        // Eliminar la asociación del usuario con el tablero
        await user.removeBoard(board);

        // Devolver una respuesta exitosa indicando que el usuario ha sido eliminado del tablero.
        return res.status(200).json({ message: "Member removed from board successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteMemberFromBoard;