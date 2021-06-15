const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: '04XZnoT8ud',
  password: 'kLQ7ASz7mh',
  database: '04XZnoT8ud'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
