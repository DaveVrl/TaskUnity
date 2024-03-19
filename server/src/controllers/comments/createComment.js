const { Comments , Cards , Users } = require("../../db");

const createComment = async (req , res) => {
    
    try {
        
        const { cardId , userId } = req.params;
        const { comment } = req.body;

        const card = await Cards.findByPk(cardId);
        if(!card) return res.status(404).json('Card not found');

        const user = await Users.findByPk(userId);
        if(!user) return res.status(404).json('User not found');

        const newComment = await Comments.create({
            comment,
            username:user.username,
            name:user.name,
            lastname:user.lastname
        });

        await card.addComment(newComment);
        await user.addComment(newComment);

        return res.status(200).json(newComment);

    } catch (error) {
        
        return res.status(500).json({ error: error.message });

    }
};

module.exports = createComment;