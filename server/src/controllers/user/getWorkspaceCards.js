const { Users, Boards, Lists, Cards, Workspaces } = require('../../db');
const { Op } = require('sequelize');

const getWorkspaceCards = async (req, res) => {

    try {

        const { userId } = req.params;
        const { title } = req.query;

        const user = await Users.findByPk(userId);

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
                                    model:Cards,
                                    where:
                                    {
                                        title: {
                                            [Op.iLike]: `%${title}%`
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        const foundCards = [];
        
        userWorkspace.forEach(workspace => {
            workspace.boards.forEach(board => {
                board.lists.forEach(list => {
                    list.cards.forEach(card => {
                        foundCards.push(card);
                    });
                });
            });
        });

        return res.status(200).json(foundCards);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getWorkspaceCards;