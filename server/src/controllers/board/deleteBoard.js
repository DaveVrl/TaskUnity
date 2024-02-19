const { Boards } = require('../../db');

const deleteBoard = async (req, res) => {

    try {
        const { id } = req.params;

        const response = await Boards.findByPk(id);

        await response.destroy();
        
        return res.status(200).json('Board deleted successfully');

    } catch (error) {
        return res.status(500).json({error:error.message});
    }

};

module.exports = deleteBoard;