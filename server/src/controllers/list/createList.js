const { Boards, Lists } = require('../../db');

const createList = async (req, res) => {
    const { boardId } = req.params;
    const { title, description, position, type } = req.body;

    try {
        // Verificar si la board existe
        const board = await Boards.findByPk(boardId);
        if (!board) {
            return res.status(404).json({ error: "Board not found" });
        }

        // Crear la lista asociada a la board
        const newList = await Lists.create({
            title,
            description,
            position,
            type
        });

        await board.addList(newList);

        return res.status(201).json(newList);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createList;