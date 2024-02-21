const { Users, Boards, Lists, Cards } = require('../../db');

const getUserBoards = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await Users.findByPk(id);

        if (!user) return res.status(404).json('User not found');

        // Obtener todos los tableros asociados al usuario
        const userBoards = await user.getBoards({
            include: [
                {
                    model: Lists,
                    include: [
                        {
                            model: Cards
                        }
                    ]
                }
            ]
        });

        
        return res.status(200).json(userBoards);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getUserBoards;