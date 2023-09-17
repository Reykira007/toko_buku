# Toko Buku - Proyek Toko Buku Online

Proyek ini adalah aplikasi toko buku online yang dibangun menggunakan JavaScript, Node.js, MySQL dengan Sequelize sebagai ORM, dan Express.js. Aplikasi ini juga mengimplementasikan otentikasi berbasis JWT dan mencoba mengikuti prinsip clean code.

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

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE). Ini berarti:

- Anda diberikan hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, sublicensikan, dan/atau menjual salinan perangkat lunak ini, serta untuk mengizinkan orang lain yang melakukannya, asalkan tindakan tersebut dilakukan sesuai dengan ketentuan Lisensi MIT.

- Anda harus mencantumkan pemberitahuan hak cipta di semua salinan atau bagian yang signifikan dari perangkat lunak ini.

- Perangkat lunak ini disediakan "apa adanya," tanpa jaminan apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan kepatutan untuk tujuan tertentu dan non-pelanggaran. Penulis atau pemegang hak cipta tidak bertanggung jawab atas klaim, kerusakan, atau kewajiban hukum lainnya yang timbul akibat dari atau sehubungan dengan perangkat lunak tersebut.

Lisensi MIT memberikan fleksibilitas kepada pengguna proyek Anda untuk menggunakan dan mengadaptasi kode sumbernya dengan sedikit pembatasan, asalkan mereka mencantumkan pemberitahuan hak cipta Anda. Ini adalah pilihan yang umum untuk proyek open source yang ingin membagikan dan mengizinkan penggunaan kode sumber mereka dengan bebas.
