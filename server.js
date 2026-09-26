const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const siswaRoutes = require('./routes/siswa_routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan jika ada password
    database: 'db_siswa'
});

db.connect(err => {
    if (err) console.error('Koneksi database gagal:', err);
    else console.log('Terhubung ke database MySQL');
});

// --- ENDPOINT REST API ---

// 1. GET /api/siswa - Menampilkan semua siswa
app.get('/api/siswa', (req, res) => {
    db.query('SELECT * FROM siswa', (err, results) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        res.json({ status: true, data: results });
    });
});

// 2. GET /api/siswa/:id - Menampilkan satu siswa
app.get('/api/siswa/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM siswa WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        if (results.length === 0) return res.status(404).json({ status: false, message: 'Data tidak ditemukan' });
        res.json({ status: true, data: results[0] });
    });
});

// 3. POST /api/siswa - Menambahkan siswa
app.post('/api/siswa', (req, res) => {
    const { nis, nama, kelas, jurusan, alamat } = req.body;
    if (!nis || !nama || !kelas || !jurusan || !alamat) {
        return res.status(400).json({ status: false, message: 'Semua field wajib diisi' });
    }
    db.query(
        'INSERT INTO siswa (nis, nama, kelas, jurusan, alamat) VALUES (?, ?, ?, ?, ?)',
        [nis, nama, kelas, jurusan, alamat],
        (err, result) => {
            if (err) return res.status(500).json({ status: false, message: err.message });
            res.status(201).json({ status: true, message: 'Siswa berhasil ditambahkan', id: result.insertId });
        }
    );
});

// 4. PUT /api/siswa/:id - Mengubah data siswa
app.put('/api/siswa/:id', (req, res) => {
    const { id } = req.params;
    const { nis, nama, kelas, jurusan, alamat } = req.body;
    db.query(
        'UPDATE siswa SET nis=?, nama=?, kelas=?, jurusan=?, alamat=? WHERE id=?',
        [nis, nama, kelas, jurusan, alamat, id],
        (err, result) => {
            if (err) return res.status(500).json({ status: false, message: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Data tidak ditemukan' });
            res.json({ status: true, message: 'Data siswa berhasil diperbarui' });
        }
    );
});

// 5. DELETE /api/siswa/:id - Menghapus siswa
app.delete('/api/siswa/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM siswa WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Data tidak ditemukan' });
        res.json({ status: true, message: 'Data siswa berhasil dihapus' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});