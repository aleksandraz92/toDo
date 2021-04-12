var mysql = require('mysql');
const mail = require('./send-email-test');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aleksandra92",
  database: "todo"
});

con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM task", function (err, result, fields) {
    if (err) throw err;
    mail('stefan_92_maksimovic@hotmail.com','Proba',result[0].task_name);
  });
});
