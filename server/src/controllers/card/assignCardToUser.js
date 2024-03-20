const { Users , Cards } = require('../../db');

const assignCardToUser = async (req , res) => {

    try {

        const { userId , cardId } = req.params;

        const card = await Cards.findByPk(cardId);
        if(!card) return res.status(404).json('Card not found');

        const user = await Users.findByPk(userId);
        if(!user) return res.status(404).json('User not found');

        const [updated] = await Cards.update({
            assigned_to:{
                id: user.id,
                name: `${user.name} ${user.lastname}`,
                username: user.username,
                avatar_img: user.avatar_img
            } 
        },{ where:{ id:cardId } });

        if(updated === 0) return res.status(404).json('Card not found');

        return res.status(200).json('Task assigned successfully');
    
    } catch (error) {

        return res.status(500).json({error:error.message});
        
    }
};

module.exports = assignCardToUser;