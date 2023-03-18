const jokes = require('../models/jokes.model');

const getAllJokes = (req, res) => {
    jokes.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err));
};

const singleJoke = (req, res) => {
    const {params} = req;
    jokes.findOne({_id: params._id })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

const createJoke = (req, res) => {
    const { body } = req;
    jokes.create(body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err))
};

const updateJoke = (req, res) => {
    jokes.findOneAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedJoke) => res.json(updateJoke))
    .catch((err) => console.log(err))
};

const deleteJoke = (req, res) => {
    jokes.deleteOne({_id: req.params._id})
    .then((result) => res.json(result))
    .catch((err) => console.log(err))

}

module.exports = {
    getAllJokes,
    singleJoke,
    createJoke,
    updateJoke,
    deleteJoke
};