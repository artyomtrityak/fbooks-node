var Sequelize = require("sequelize");

var connection = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'fbooks.sqlite'
});

connection.query("SELECT 1").success(function(myTableRows) {
  console.log('DB connection works fine');
});


module.exports = function(app) {
  app.set('DB_CONNECTION', connection);
};
