const { Lists } = require('../../db');

const deleteList = async (req, res) => {

    try {

        const { id } = req.params;

        const response = await Lists.findByPk(id);

        await response.destroy();

        return res.status(200).json('List deleted succesfully');

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = deleteList;