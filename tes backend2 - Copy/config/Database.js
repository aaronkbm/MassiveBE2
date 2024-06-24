// import { Sequelize } from "sequelize";

// const db = new Sequelize('rasatradisional_db','root','',{
//     host: "localhost",
//     dialect: "mysql"
// });

// export default db;
import mysql from "mysql";


// Buat koneksi ke MySQL
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'rasatradisional_db'
});

// Lakukan koneksi
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default db;