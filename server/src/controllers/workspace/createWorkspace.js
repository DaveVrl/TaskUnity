const { Workspaces , Users } = require('../../db');

const createWorkspace = async (req, res) => {
    
    const { id } = req.params;
    const { name, description, logo, public } = req.body;

    try {
        // Verificar que el usuario exista
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Crear el tablero y asociarlo con el usuario
        const newWorkspace = await Workspaces.create({
            name,
            description,
            logo,
            public,
            created_by: id,
            members_id: [id]
            // admins_id:[id] si manejamos con role owner no será necesario almacenar id
        });

        // ¡¡¡¡¡¡ ASOCIAR EL TABLERO CON EL USUARIO !!!!!!
        // Y se asigna el valor 'owner' en el campo role de UserWorkspaces
        await user.addWorkspace(newWorkspace, { through: { rol:'owner'}});

        // Devolver el tablero creado como respuesta
        return res.status(201).json(newWorkspace);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createWorkspace;