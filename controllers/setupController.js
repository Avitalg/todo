const Todos = require('../models/toDoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res){
        const starterTodos = [{
            username: 'test',
            todo: 'Buy milk',
            isDone: false,
            hasAttachment: false,
        },
        {
            username: 'test',
            todo: 'food fog',
            isDone: false,
            hasAttachment: false,
        }];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        })
    })
}