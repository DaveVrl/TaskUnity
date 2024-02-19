const { Boards } = require('../../db');

const createBoard = async (req, res) => {

    const { id } = req.params;
    
    const {title, description, logo} = req.body;

    try {
        const newBoard = await Boards.create({
            created_by: id,
            title: title,
            description: description,
            logo: logo
        });

        return res.status(200).json(newBoard);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = createBoard;