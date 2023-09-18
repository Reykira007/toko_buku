# Toko Buku - Proyek Toko Buku Online

Proyek latihan backend untuk pengembangan aplikasi toko buku online dengan JavaScript, Node.js, MySQL (Sequelize ORM), dan Express.js. Mengimplementasikan otentikasi berbasis JWT dan prinsip clean code.

## SOAL
[Soal Latihan Backend.pdf](https://github.com/Reykira007/toko_buku/files/12652021/Soal.Latihan.Backend.pdf)


## Fitur Utama

1. **Manajemen Kategori**
    - CRUD (Create, Read, Update, Delete) untuk kategori buku.

2. **Manajemen Buku**
    - CRUD (Create, Read, Update, Delete) untuk buku.
    - Pencarian buku berdasarkan judul.

3. **Checkout**
    - Menampilkan data buku.
    - Pencarian buku berdasarkan judul dan kategori.
    - Validasi stok buku saat pembelian.
    - Simpan data pembelian buku (judul, cover, harga, dan kuantitas).
    - Mengurangi stok buku setiap kali ada pembelian.

4. **Transaksi**
    - Menampilkan semua data transaksi.
    - Menampilkan detail transaksi.
    - Pencarian transaksi berdasarkan invoice.

## Spesifikasi Teknis

- Bahasa Pemrograman: JavaScript
- Backend Framework: Node.js
- Database: MySQL dengan Sequelize sebagai ORM
- Otentikasi: JSON Web Tokens (JWT)
- Web Framework: Express.js
- Prinsip Clean Code
- Dokumentasi API: Postman
- Deployment: Heroku

## Cara Menjalankan Proyek

1. Clone repositori ini ke komputer Anda. 
2. Masuk ke direktori proyek.
3. Install semua dependensi.
4. Atur variabel lingkungan yang diperlukan (seperti koneksi database, kunci JWT, dll) di berkas `.env`.
5. Jalankan proyek.
6. Proyek akan berjalan di `http://localhost:port` (port yang Anda tentukan dalam berkas `.env`).

## Dokumentasi API

Anda dapat menemukan dokumentasi API lengkap di [Postman](link-ke-dokumentasi-postman).

### Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).
