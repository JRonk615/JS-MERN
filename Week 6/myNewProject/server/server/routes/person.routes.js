const PersonController = require('../controllers/person.controllers');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople); 
    app.get('/api/people/:id', PersonController.getPerson);
}