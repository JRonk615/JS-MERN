const Author = require('../models/authors.model')

const createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) => res.status(400).json({err}))
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => res.status(400).json({err}))
};

const getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then((queryAuthor) => res.json(queryAuthor))
        .catch((err) => res.status(400).json({err}))
};

const updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators: true
    })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json({err}))
};

const deleteUser = (req,res) => {
    Author.deleteOne({_id: req.params.id })
        .then((deleteAuthor) => res.json({deleteAuthor}))
        .catch((err) => res.status(400).json({err}))
};
module.exports = { createAuthor, getAllAuthors, getOneAuthor, updateAuthor, deleteUser }