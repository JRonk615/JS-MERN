const mongoose = require('mongoose');

const jokesSchema = new mongoose.Schema(
    {
    setup: String,
    punchline: String,
    },
    { timestamps: true }
);

const jokes = mongoose.model('jokes', jokesSchema)

module.exports = jokes;