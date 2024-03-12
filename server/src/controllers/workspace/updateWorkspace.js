const { Workspaces } = require('../../db');

const updateWorkspace = async (req, res) => {

    try {

        const { id } = req.params;
        const { name, description, logo, public} = req.body;

        const [workspaceUpdate] = await Workspaces.update({
            name,
            description,
            logo,
            public,
        }, {where:{id:id}});

        if(workspaceUpdate === 0) return res.status(404).json('Workspace not found');

        const updateWorkspace = await Workspaces.findByPk(id)

        //'Workspace update successfully'
        return res.status(200).json(updateWorkspace);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = updateWorkspace;