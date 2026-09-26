const express = require('express');
const router = express.Router();
const db = require('../config/database');

// 1. GET /api/siswa - Menampilkan semua data siswa
router.get('/', (req, res) => {
    db.query('SELECT * FROM siswa', (err, results) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        res.json({ status: true, data: results });
    });
});

// 2. GET /api/siswa/:id - Menampilkan satu data siswa berdasarkan ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM siswa WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        if (results.length === 0) return res.status(404).json({ status: false, message: 'Data tidak ditemukan' });
        res.json({ status: true, data: results[0] });
    });
});

// 3. POST /api/siswa - Menambahkan data siswa baru
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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

// 5. DELETE /api/siswa/:id - Menghapus data siswa
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM siswa WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Data tidak ditemukan' });
        res.json({ status: true, message: 'Data siswa berhasil dihapus' });
    });
});

module.exports = router;