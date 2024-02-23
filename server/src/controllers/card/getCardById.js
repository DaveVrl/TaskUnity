const { Cards , Comments } = require('../../db');

const getCardById = async (req  , res) => {

    try {

        const { id } = req.params;

        const data = await Cards.findByPk(id,{ include: Comments });

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = getCardById;