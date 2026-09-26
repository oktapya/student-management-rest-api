# 🎓 Student Management System - REST API & Frontend Integration

> **Aplikasi Web Manajemen Data Siswa Berbasis REST API dan Dashboard Frontend Responsive**

Aplikasi Web Manajemen Data Siswa yang dikembangkan untuk mengelola data siswa sekolah secara real-time. Sistem ini menerapkan arsitektur *Client-Server* modern menggunakan **Node.js & Express.js** sebagai penyedia REST API, **MySQL (via Laragon / HeidiSQL)** sebagai basis data terpusat, serta **JavaScript Fetch API** pada sisi frontend tanpa menggunakan `localStorage`.

---

## 📑 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi & Tools](#-teknologi--tools)
- [Struktur Direktori Proyek](#-struktur-direktori-proyek)
- [Persiapan & Instalasi](#-persiapan--instalasi)
- [Dokumentasi Endpoint REST API](#-dokumentasi-endpoint-rest-api)
- [Pengujian REST API (Postman / Thunder Client)](#-pengujian-rest-api-postman--thunder-client)
- [Tampilan Antarmuka (Frontend)](#-tampilan-antarmuka-frontend)
- [Identitas Pembuat](#-identitas-pembuat)

---

## ✨ Fitur Utama
- 📑 **Read Data (Tampil Data):** Menampilkan seluruh daftar data siswa secara real-time dari database MySQL melalui REST API.
- ➕ **Create Data (Tambah Data):** Menambahkan data siswa baru melalui form input interaktif yang dilengkapi validasi.
- ✏️ **Update Data (Edit Data):** Memperbarui informasi data siswa yang sudah ada berdasarkan ID siswa.
- 🗑️ **Delete Data (Hapus Data):** Menghapus record data siswa dari database dengan konfirmasi dialog SweetAlert2.
- 🔍 **Live Search Filter:** Pencarian data siswa secara praktis dan instan di tabel dashboard berdasarkan NIS, Nama, atau Jurusan.
- ⚡ **Interactive UI & Alerts:** Tampilan modern dengan indikator status loading dan notifikasi (*Success/Error*) yang responsif.

---

## 🛠️ Teknologi & Tools

| Kategori | Teknologi / Tools yang Digunakan |
| :--- | :--- |
| **Backend Runtime** | Node.js |
| **Web Framework** | Express.js, CORS, Body-Parser |
| **Database Driver** | MySQL (`mysql2`) |
| **Database Environment** | Laragon / HeidiSQL |
| **Frontend Framework & UI** | HTML5, CSS3, JavaScript (ES6+ Fetch API), Bootstrap 5 |
| **User Experience (UX)** | FontAwesome Icons, SweetAlert2 |
| **Version Control & Repository** | Git, GitHub |
| **API Testing Tools** | Postman / Thunder Client |

---

## 📁 Struktur Direktori Proyek

```text
praktek_akhir/
├── config/
│   └── database.js      # Konfigurasi dan koneksi ke database MySQL
├── routes/
│   └── siswa_routes.js  # Routing dan penanganan logika endpoint REST API Siswa
├── screenshots/         # Folder penyimpanan file screenshot pengujian
│   ├── api-get.png
│   ├── api-post.png
│   ├── api-put.png
│   ├── api-delete.png
│   └── frontend.png
├── node_modules/        # Folder dependensi Node.js (otomatis terpasang via npm)
├── index.html           # Halaman utama antarmuka pengguna (Dashboard Frontend)
├── package.json         # File manifes dependensi dan informasi proyek Node.js
├── README.md            # File dokumentasi resmi proyek
└── server.js            # Entry point utama untuk menjalankan server Express.js