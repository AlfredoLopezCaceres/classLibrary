const User = require('../model/user.model.js')

const listUsers = (req, res) => {
    res.status(200).send('Users OK')
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'Error creating User',
            err: error
        })
    }

}

module.exports = {
    listUsers,
    createUser
}