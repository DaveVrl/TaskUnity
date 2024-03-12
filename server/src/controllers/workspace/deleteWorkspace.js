const { Workspaces } = require('../../db');

const deleteWorkspace = async (req, res) => {

    try {
        const { id } = req.params;

        const response = await Workspaces.findByPk(id);

        await response.destroy();
        
        return res.status(200).json('Workspace deleted successfully');

    } catch (error) {
        return res.status(500).json({error:error.message});
    }

};

module.exports = deleteWorkspace;