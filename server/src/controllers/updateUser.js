const { Users } = require('../db');

const updateUser = async (req,res) => {

    const { id } = req.params;
    const { username, email, password, avatar_img, admin} = req.body;

    try {

        const result = await Users.update({ username, email, password, avatar_img, admin 
        }, {where: {id:id}});

        if (result[0] === 1) {
            return res.json({ message: "Profile updated successfully."});
        } else {
            return res.status(400).send({ error: "Could not update user profile."});
        }
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

module.exports = updateUser;