const { Users } = require('../db');
const bcrypt = require('bcrypt');

const updateUser = async (req,res) => {

    const { id } = req.params;
    const { username, email, password, avatar_img, admin} = req.body;

    try {
        
        //Password se actualiza solo, lo demas podría manejarse en conjunto.
        if(password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password , saltRounds);

            await Users.update({ password:hashedPassword }, {where: {id:id}});

            return res.json({ message: "Password updated successfully."});
        }

        const result = await Users.update({ username, email, avatar_img, admin 
        }, {where: {id:id}});

        if (result[0] === 1) {
            return res.json({ message: "Profile updated successfully."});
        } else {
            return res.status(400).json({ error: "Could not update user profile."});
        }
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

module.exports = updateUser;