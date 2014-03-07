var controller = require('./controller');

module.exports = function(app) {
  var BooksModel = require('./model')(app);
  var scope = {model: BooksModel};

  app.get('/books', controller.get.bind(scope));
  // Add post ACL
  app.post('/books', controller.create.bind(scope));

  app.get('/books/:id', controller.getById.bind(scope));
  // Add put ACL
  app.put('/books/:id', controller.update.bind(scope));
  // Add delete ACL
  app.delete('/books/:id', controller.delete.bind(scope));

  console.log('books module loaded');
};