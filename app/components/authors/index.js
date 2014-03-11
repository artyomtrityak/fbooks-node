var express = require('express'),
  AuthorsModel = require('./model'),
  controller = require('./controller'),
  localApp = express();

module.exports = function(app) {
  var authorsModel = AuthorsModel(app);
  var scope = {model: authorsModel};

  localApp.get('/', controller.get.bind(scope));
  // Add post ACL
  localApp.post('/', controller.create.bind(scope));

  localApp.get('/:id', controller.getById.bind(scope));
  // Add put ACL
  localApp.put('/:id', controller.update.bind(scope));
  // Add delete ACL
  localApp.delete('/:id', controller.delete.bind(scope));

  console.log('authors module loaded');
  return localApp;
};