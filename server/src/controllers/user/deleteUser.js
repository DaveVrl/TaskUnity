const { Users } = require('../../db');

const deleteUser = async (req, res) => {
    
    const { id } = req.params;

    try {

        const deleteUserAccount = await Users.destroy({
            where: { id:id }
        });

        if (deleteUserAccount === 1) {
            return res.json({message:'User deleted successfully.'});
        } else {
            return res.status(400).json({error: 'Could not delete user.'})
        }
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = deleteUser;