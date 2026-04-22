const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // twój użytkownik MySQL
  password: '',        // twoje hasło MySQL (jeśli nie masz, zostaw puste)
  database: 'urlshortener'
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą:', err);
    return;
  }
  console.log('Połączono z MySQL!');
});

module.exports = db;