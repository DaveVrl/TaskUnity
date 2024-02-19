const { Users } = require('../../db');

const getUserById = async (req, res) => {

    try {

        const { id } = req.params;
        const idUser = await Users.findOne({where: {id:id}});

        if(!idUser) return res.status(400).json("User not found.");

        return res.status(200).json(idUser);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }

};

module.exports = getUserById;