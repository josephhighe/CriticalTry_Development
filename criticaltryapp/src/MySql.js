const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'criticaltry.czd0hmb1dure.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'RollNat20',
  database: 'TestDB'
});

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  con.query('SELECT * FROM DnD', (err, rows) => {
    if(err) throw err;

    console.log('Data received from DB: ');
    console.log(rows);
  })

  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });