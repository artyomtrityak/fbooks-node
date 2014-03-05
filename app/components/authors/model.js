var Sequelize = require("sequelize");

module.exports = function(app) {
  var Connection = app.get('DB_CONNECTION');

  var AuthorsModel = Connection.define('authors', {
    name: Sequelize.STRING
  });

  //AuthorsModel.drop();
  
  AuthorsModel.sync();

  return AuthorsModel;
};