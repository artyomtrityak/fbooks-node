var Sequelize = require("sequelize");

module.exports = function(app) {
  var Connection = app.get('DB_CONNECTION');

  var BooksModel = Connection.define('books', {
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Book name cannot be empty'
        }
      }
    }
  });

  BooksModel.create({ title: 'book name' });
  //BooksModel.drop();
  
  BooksModel.sync();

  return BooksModel;
};