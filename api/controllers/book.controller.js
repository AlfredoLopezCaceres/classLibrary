const listBooks = (req, res) => {
    res.status(200).send('API OK')
}

const createBook = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listBooks,
    createBook
}