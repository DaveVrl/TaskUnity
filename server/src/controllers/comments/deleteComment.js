const { Comments } = require('../../db');

const deleteComment = async (req, res) => {

    try {

        const { id } = req.params;

        const comment =  await Comments.findByPk(id);
        if(!comment) return res.status(404).json({error:'Comment not found'});

        const deleteComment = await Comments.destroy({
            where:{ id:id }
        });

        if (deleteComment === 1) {
            return res.status(200).json('Comment deleted successfully');
        } else {
            return res.status(400).json('Could not delete Comment');
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = deleteComment;