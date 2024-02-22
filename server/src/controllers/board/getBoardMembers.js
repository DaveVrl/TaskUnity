const { Boards , Users } = require('../../db');

const getBoardMembers = async (req , res) => {

    try {

        const { boardId } = req.params;

        const board = await Boards.findByPk(boardId);

        if (!board) return res.status(404).json('Board not found');

        const membersIds = board.members_id;

        const membersInfo = await Promise.all(membersIds.map(async(userId) => {
            const user = await Users.findByPk(userId, {
                attributes:['username','avatar_img']
            });
            return user.toJSON();
        }));

        return res.status(200).json(membersInfo);

    } catch (error) {
        
    }
};

module.exports = getBoardMembers;