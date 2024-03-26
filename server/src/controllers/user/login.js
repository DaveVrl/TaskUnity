const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const util = require('util');

const login = async (req , res) => {
    
    try {
        
        const { username , password } = req.body;
        
        if(username) {
            const user = await Users.findOne({ where: { username }});
            if(user) {
                await util.promisify(setTimeout)(100);

                const passwordMatches = await bcrypt.compare(password, user.password);

                return passwordMatches
                ? res.json(user)
                : res.status(400).json('Invalid Password');
            };
        };
        
    } catch (error) {
        return res.status(500).json({ error:error.message });
    }
};

module.exports = login;