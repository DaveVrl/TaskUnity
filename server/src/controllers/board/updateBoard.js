const { Boards } = require('../../db');

const updateBoard = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, description, state} = req.body;

        const [boardUpdate] = await Boards.update({
            title,
            description,
            state
        }, {where:{id:id}});

        if(boardUpdate === 0) return res.status(404).json('Board not found');

        const updateBoard = await Boards.findByPk(id)

        //'Board update successfully'
        return res.status(200).json(updateBoard);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = updateBoard;