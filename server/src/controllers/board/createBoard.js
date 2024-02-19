const { Boards , Users } = require('../../db');

const createBoard = async (req, res) => {
    const { id } = req.params;
    const { title, description, logo } = req.body;

    try {
        // Verificar que el usuario exista
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Crear el tablero y asociarlo con el usuario
        const newBoard = await Boards.create({
            title,
            description,
            logo,
            created_by: id // Establecer el ID del usuario como creador del tablero
        });

        // ASOCIAR EL TABLERO CON EL USUARIO !!!!!!
        await user.addBoard(newBoard);

        // Devolver el tablero creado como respuesta
        return res.status(201).json(newBoard);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createBoard;