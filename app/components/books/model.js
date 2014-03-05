var Sequelize = require("sequelize");

module.exports = function(app) {
  var Connection = app.get('DB_CONNECTION');

  var BooksModel = Connection.define('books', {
    title: Sequelize.STRING
  });

  //BooksModel.drop();
  
  BooksModel.sync();

  return BooksModel;
};