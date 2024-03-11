const { Workspaces , Users } = require('../../db');

const getWorkspaceMembers = async (req , res) => {

    try {

        const { workspaceId } = req.params;

        const workspace = await Workspaces.findByPk(workspaceId);

        if (!workspace) return res.status(404).json('Workspace not found');

        const membersIds = workspace.members_id;

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

module.exports = getWorkspaceMembers;