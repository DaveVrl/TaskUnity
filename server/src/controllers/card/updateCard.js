const { Cards } = require('../../db');

const updateCard = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, description, position, state, due_date, comments, assigned_to } = req.body;

        const [update] = await Cards.update({
            title,
            description,
            position,
            state,
            comments,
            assigned_to,
            due_date
        },{where:{ id }});

        if(update === 0) return res.status(404).json('Card not found');

        //'Card update successfully'
        const cardUpdate = await Cards.findByPk(id);

        return res.status(200).json(cardUpdate);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = updateCard;