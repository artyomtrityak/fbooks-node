var EventEmitter = require('events').EventEmitter;

var Controller = function(options) {
  this.params = options;
};
Controller.prototype = new EventEmitter();

Controller.prototype.getAuthors = function() {

};

Controller.prototype.getAuthor = function(bookId) {
  console.log(this.params);
};

Controller.prototype.createAuthor = function() {

};

Controller.prototype.updateAuthor = function(bookId) {

};

Controller.prototype.deleteAuthor = function(bookId) {

};

module.exports = function(app) {
  var AuthorModel = require('./model')(app);
  var controller = new Controller({model: AuthorModel});

  app.get('/authors', controller.getAuthors.bind(controller));
  app.post('/authors', controller.createAuthor.bind(controller));

  app.get('/authors/:id', controller.getAuthor.bind(controller));
  app.put('/authors/:id', controller.updateAuthor.bind(controller));
  app.delete('/authors/:id', controller.deleteAuthor.bind(controller));

  console.log('authors module loaded');

};