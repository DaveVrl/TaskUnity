const { Lists } = require('../../db');

const updateList = async (req, res) => {
    
    const { id } = req.params;
    const { title, description, position, type } = req.body;

    try {
        
        const [rowsUpdated] = await Lists.update({
                title,
                description,
                position,
                type
            },{where:{ id }});

        if(rowsUpdated === 0) return res.status(404).json('List not found');
        
        const updatedList = await Lists.findByPk(id);

        //'List update successfully'
        return res.status(200).json(updatedList);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateList;
