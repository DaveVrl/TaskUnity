const { Comments } = require('../../db');

const updateComment = async (req, res) => {

    try {

        const { id } = req.params;
        const { comment } = req.body;

        const [update] = await Comments.update({
            comment
        },{where:{ id }});

        if(update === 0) return res.status(404).json('Comment not found');

        //'Comment update successfully'
        const commentUpdate = await Comments.findByPk(id);

        return res.status(200).json(commentUpdate);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = updateComment;