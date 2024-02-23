const { Comments , Cards } = require("../../db");

const createComment = async (req , res) => {
    
    try {
        
        const { cardId } = req.params;
        const { comment } = req.body;

        const card = await Cards.findByPk(cardId);

        const newComment = await Comments.create({
            comment,
        });

        await card.addComment(newComment);

        return res.status(200).json(newComment);

    } catch (error) {
        
        return res.status(500).json({ error: error.message });

    }
};

module.exports = createComment;