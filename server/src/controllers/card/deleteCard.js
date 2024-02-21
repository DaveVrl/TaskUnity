const { Cards } = require('../../db');

const deleteCard = async (req, res) => {

    try {

        const { id } = req.params;

        const deleteCard = await Cards.destroy({
            where:{ id:id }
        });

        if (deleteCard === 1) {

            return res.status(200).json('Card deleted successfully');

        } else {

            return res.status(400).json('Could not delete Card');

        }
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = deleteCard;