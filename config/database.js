const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan jika MySQL Anda pakai password
    database: 'db_siswa'
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err);
    } else {
        console.log('Terhubung ke database MySQL');
    }
});

module.exports = db;