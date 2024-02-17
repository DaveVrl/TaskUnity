const { Users } = require("../db");
const bcrypt = require('bcrypt');

const createUser = async (req , res) => {
    try {
        const { username, email, password, avatar_img, master , admin} = req.body;

        if(!username || !email || !password) return res.status(500).json("Please provide username, email, and password");
        
        if (username && email) {
            const saltRounds = 10; //Número de rondas de cifrado
            const hashedPassword = await bcrypt.hash(password , saltRounds);

            const [register, created] = await Users.findOrCreate({
                where: {username,email},
                defaults: {username, email, password:hashedPassword, avatar_img, master, admin}
            });

            if (created) {
                const response = {       
                    id: register.id,
                    username: register.username,
                    email: register.email,
                    password: register.password,
                    avatar_img: register.avatar_img,
                    master: register.master,
                    admin: register.admin
                };

                return res.json(response);

            } else {
                return res.status(409).json("The user already exists, try another one");
            }
        };

    } catch (error) {
        
        return res.status(500).json({ error: error.message });

    }
};

module.exports = createUser;