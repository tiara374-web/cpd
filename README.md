# Portofolio Guru Berdampak — SDGs & Informatika

Situs portofolio statis untuk diedit langsung dan dipublikasikan di GitHub Pages atau Vercel. Tidak membutuhkan framework, build command, database, atau API.

## Isi proyek
- `index.html`: seluruh konten dan struktur halaman.
- `style.css`: tampilan, responsif, animasi, dan aturan cetak.
- `script.js`: menu mobile, scroll reveal, penanda navigasi, dan cetak/PDF.
- `assets/`: ilustrasi SVG lokal. Ganti dengan foto/aset sendiri bila dibutuhkan.

## Cara mengedit
1. Buka `index.html` di VS Code atau editor teks.
2. Cari placeholder seperti `[Nama lengkap]`, `emailanda@example.com`, dan teks dalam tanda kurung siku; ganti dengan data sendiri.
3. Edit deskripsi kegiatan hanya sesuai pengalaman dan bukti yang benar-benar ada.
4. Untuk mengganti ilustrasi, letakkan file baru di `assets/`, lalu ubah atribut `src` pada `<img>`.
5. Untuk menambahkan kartu kegiatan, salin elemen `<article class="activity ...">...</article>` pada bagian `<!-- C. PORTOFOLIO AKSI -->`, lalu ubah judul, deskripsi, SDGs, dan bukti.
6. Tambahkan tautan bukti pada bagian kegiatan dengan mengganti teks placeholder di `<details>`. Pastikan link dapat diakses oleh orang yang dituju.
7. Ganti email dan tautan profil profesional pada bagian kontak.

## Deploy ke GitHub Pages
1. Buat repositori baru, lalu unggah isi folder ini (index.html, style.css, script.js, README.md, dan folder assets).
2. Buka Settings → Pages.
3. Pilih Deploy from a branch, branch `main`, folder `/ (root)`, lalu Save.
4. Tunggu proses selesai dan buka URL yang disediakan GitHub.

## Deploy ke Vercel
1. Unggah proyek ke GitHub.
2. Di Vercel, pilih Add New → Project dan impor repositori.
3. Pilih framework preset `Other`. Tidak perlu build command; output adalah root proyek.
4. Klik Deploy.

## Catatan
- SDG 4 menjadi fokus utama karena kegiatan yang dicantumkan berkaitan dengan pembelajaran berkualitas.
- Situs tidak mengklaim peningkatan nilai atau keaktifan terukur tanpa data pendukung.
- Sebelum publikasi, cek kembali refleksi pribadi, identitas, dan tautan.
- Jangan mempublikasikan data pribadi atau foto murid tanpa izin dan sesuai kebijakan sekolah.
- Tombol Cetak / Simpan PDF membuka dialog cetak browser; pilih “Save as PDF” untuk menyimpan.
