var Sequelize = require("sequelize");

module.exports = function(app) {
  var Connection = app.get('DB_CONNECTION');

  var AuthorsModel = Connection.define('authors', {
    name: Sequelize.STRING
  });

  //AuthorsModel.create({ name: 'author name' });
  //AuthorsModel.drop();
  
  AuthorsModel.sync();

  app.set('MODEL_AUTHORS', AuthorsModel);

  return AuthorsModel;
};