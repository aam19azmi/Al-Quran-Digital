# Al-Qur'an Digital Web App 📖

![Project Banner](https://via.placeholder.com/1200x600?text=Al-Quran+Digital+Preview+Image) 
Aplikasi web Al-Qur'an digital yang ringan, cepat, dan responsif. Dibangun menggunakan **Vanilla JavaScript** (tanpa framework/library berat) untuk mendemonstrasikan pemahaman mendalam tentang manipulasi DOM, Fetch API, dan Modern CSS.

Aplikasi ini menyediakan bacaan 30 Juz lengkap dengan terjemahan Bahasa Indonesia dan audio murottal per surah.

🔗 **Live Demo:** [https://quran.sourcecodejournal.dev](https://quran.sourcecodejournal.dev)

---

## ✨ Fitur Utama

* **Daftar Surah Lengkap:** Menampilkan 114 surah dengan nama Arab, Latin, arti, dan jumlah ayat.
* **Pencarian Real-time:** Fitur pencarian cepat (tanpa reload) untuk menemukan surah berdasarkan nama latin atau arti.
* **Detail Ayat & Terjemahan:** Tampilan ayat yang nyaman dibaca dengan font *Amiri* (Arab) dan *Poppins* (Latin).
* **Audio Murottal:** Pemutar audio HTML5 terintegrasi di setiap surah.
* **Logika Kaligrafi Cerdas:** Penambahan kaligrafi *Bismillah* (﷽) otomatis di awal surah (kecuali Al-Fatihah & At-Taubah).
* **Responsive Design:** Tampilan optimal di Smartphone, Tablet, dan Desktop.
* **SEO Optimized:** Dilengkapi Meta Tags dan Open Graph untuk visibilitas di mesin pencari dan media sosial.

## 🛠️ Teknologi yang Digunakan

Project ini dibuat dengan **Pure Native Tech Stack** untuk memaksimalkan performa dan SEO:

* **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), JavaScript (ES6+).
* **Data Fetching:** Fetch API & Async/Await.
* **Typography:** Google Fonts (Amiri & Poppins).
* **Icons:** FontAwesome 6.
* **API:** [EQuran.id API V2](https://equran.id/apidev).

## 📂 Struktur Folder

```text
quran-app/
├── index.html      # Struktur utama halaman (List & Detail)
├── style.css       # Styling responsif & Glassmorphism UI
├── script.js       # Logic (Fetch Data, Search, DOM Rendering)
└── README.md       # Dokumentasi Proyek
🚀 Cara Menjalankan (Local)
Clone repository ini:

Bash

git clone [https://github.com/aam19azmi/quran-app.git](https://github.com/aam19azmi/quran-app.git)
Buka folder project:

Bash

cd quran-app
Jalankan: Buka file index.html langsung di browser, atau gunakan ekstensi Live Server di VS Code untuk pengalaman yang lebih baik.

🧠 Highlight Kode (Code Snippets)
Salah satu tantangan menarik dalam proyek ini adalah logika penempatan Bismillah. Berikut cuplikan kodenya:

JavaScript

// Logic: Menampilkan Bismillah kecuali pada Surah Al-Fatihah (1) dan At-Taubah (9)
let bismillahHTML = '';
if (data.nomor !== 1 && data.nomor !== 9) {
    bismillahHTML = `
        <div class="bismillah-container">
            <div class="bismillah-text">﷽</div>
        </div>
    `;
}
🤝 Kontribusi & Credits
Data Al-Qur'an dan Audio disediakan secara gratis oleh EQuran.id. Dikembangkan oleh Azmi Jalaluddin Amron sebagai bagian dari portofolio Fullstack Developer.

<p align="center"> Built with ❤️ by <a href="https://sourcecodejournal.dev">Source Code Journal</a> </p>