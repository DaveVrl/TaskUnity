const { Boards } = require('../../db');

const updateBoard = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, description, logo, position, state, members_id} = req.body;

        const [boardUpdate] = await Boards.update({
            title,
            description,
            logo,
            position,
            state,
            members_id
        }, {where:{id:id}});

        if(boardUpdate === 0) return res.status(404).json('Board not found');

        return res.status(200).json('Board update successfully');
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = updateBoard;