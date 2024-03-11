const { Users, Boards, Lists, Cards, Workspaces } = require('../../db');

const getUserWorkspace = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await Users.findByPk(id);

        if (!user) return res.status(404).json('User not found');

        // Obtener todos los tableros asociados al usuario
        const userWorkspace = await user.getWorkspaces({
            include: [
                {
                    model: Boards,
                    include: [
                        {
                            model: Lists,
                            include: [
                                {
                                    model:Cards
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        
        return res.status(200).json(userWorkspace);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getUserWorkspace;