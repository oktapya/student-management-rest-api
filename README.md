# 🎓 Student Management System - REST API & Frontend Integration

> **Aplikasi Manajemen Data Siswa Berbasis REST API dan Dashboard Frontend Responsive**

Aplikasi Web Manajemen Data Siswa yang dikembangkan untuk mengelola data siswa sekolah secara real-time. Sistem ini menggunakan **Node.js & Express.js** sebagai penyedia REST API, **MySQL** sebagai basis data terpusat, serta **JavaScript Fetch API** pada sisi frontend tanpa menggunakan `localStorage`.

---

## 📑 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Direktori Proyek](#-struktur-direktori-proyek)
- [Persiapan & Instalasi](#-persiapan--instalasi)
- [Dokumentasi REST API](#-dokumentasi-rest-api)
- [Pengujian REST API (Postman/Thunder Client)](#-pengujian-rest-api)
- [Tampilan Antarmuka (Frontend)](#-tampilan-antarmuka-frontend)
- [Identitas Pembuat](#-identitas-pembuat)

---

## ✨ Fitur Utama
- 📑 **Read Data:** Menampilkan seluruh data siswa secara otomatis dari server API.
- ➕ **Create Data:** Menambahkan data siswa baru melalui form input yang tervalidasi.
- ✏️ **Update Data:** Mengubah detail data siswa berdasarkan ID.
- 🗑️ **Delete Data:** Menghapus data siswa lengkap dengan konfirmasi keamanan dialog.
- 🔍 **Live Search Filter:** Pencarian data siswa secara cepat berdasarkan NIS, Nama, atau Jurusan.
- ⚡ **Loading State & Alerts:** Indikator muat data dan notifikasi respon status (*Success/Error*).

---

## 🛠️ Teknologi yang Digunakan
- **Backend:** Node.js, Express.js, CORS, Mysql2
- **Database:** MySQL
- **Frontend:** HTML5, CSS3, JavaScript (ES6+ Fetch API), Bootstrap 5, FontAwesome, SweetAlert2
- **Tools & Utilities:** Git, GitHub, Postman / Thunder Client

---

## 📁 Struktur Direktori Proyek

```text
praktek_akhir/
├── config/
│   └── database.js      # Konfigurasi & Koneksi Database MySQL
├── routes/
│   └── siswa_routes.js  # Handling Endpoint REST API Siswa
├── node_modules/        # Dependencies Node.js
├── index.html           # Halaman Utama Dashboard Frontend
├── package.json         # Konfigurasi & Informasi Dependencies
├── README.md            # Dokumentasi Resmi Proyek
└── server.js            # Main Server Entry Point Express.js