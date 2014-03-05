var EventEmitter = require('events').EventEmitter;

var Controller = function(options) {
  this.params = options;
};
Controller.prototype = new EventEmitter();

Controller.prototype.getBooks = function() {

};

Controller.prototype.getBook = function(bookId) {
  console.log(this.params);
};

Controller.prototype.createBook = function() {

};

Controller.prototype.updateBook = function(bookId) {

};

Controller.prototype.deleteBook = function(bookId) {

};

module.exports = function(app) {
  var BooksModel = require('./model')(app);
  var controller = new Controller({model: BooksModel});

  app.get('/books', controller.getBooks.bind(controller));
  app.post('/books', controller.createBook.bind(controller));

  app.get('/books/:id', controller.getBook.bind(controller));
  app.put('/books/:id', controller.updateBook.bind(controller));
  app.delete('/books/:id', controller.deleteBook.bind(controller));

  console.log('books module loaded');

};