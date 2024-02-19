const { Users } = require('../../db');

const getUserBoards = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar al usuario por su ID
        const user = await Users.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Obtener todos los tableros asociados al usuario
        const userBoards = await user.getBoards();

        // Enviar los datos de los tableros al usuario
        return res.status(200).json(userBoards);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getUserBoards;