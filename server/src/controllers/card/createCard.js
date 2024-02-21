const { Cards , Lists} = require('../../db');

const createCard = async (req, res) => {

    try {

        const { listId } = req.params;
        const { title, description, position, state, due_date } = req.body;

        const list = await Lists.findByPk(listId);
        if (!list) {
            return res.status(404).json({ error: "List not found" });
        }

        const newCard = await Cards.create({
            title,
            description,
            position,
            state,
            due_date
        });

        await list.addCard(newCard); //Acá hace la asociación
        
        return res.status(200).json(newCard);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = createCard;