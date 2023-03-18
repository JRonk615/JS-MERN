const jokes = require('../controllers/jokes.contoller')

module.exports = app => {
    app.get('/api/jokes', jokes.getAllJokes);
    app.post('/api/jokes', jokes.createJoke);
    app.get('/api/jokes/:_id', jokes.singleJoke);
    app.put('/api/jokes/:_id', jokes.updateJoke);
    app.delete('/api/jokes/:_id', jokes.deleteJoke)
}