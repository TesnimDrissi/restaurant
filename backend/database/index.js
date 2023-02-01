const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'houyemaloui',
  database: 'chef'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Welcome To Your Restaurant Chef!')
  }
});


module.exports = connection