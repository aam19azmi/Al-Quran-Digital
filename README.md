Markdown

# Al-Qur'an Digital Web & Mobile App 📖 📱

![Project Banner](https://sourcecodejournal.dev/assets/projects/Al-Quran_Digital.png)

Aplikasi Al-Qur'an digital yang ringan, cepat, dan responsif. Awalnya dibangun sebagai Web App menggunakan **Vanilla JavaScript**, kini telah dikembangkan menjadi aplikasi **Android Native** menggunakan **Capacitor**.

Aplikasi ini menyediakan bacaan 30 Juz lengkap dengan terjemahan Bahasa Indonesia dan audio murottal per surah secara gratis.

🔗 **Akses Aplikasi:**
* **Web Version (Live Demo):** [https://quran.sourcecodejournal.dev](https://quran.sourcecodejournal.dev)
* **Android Version:** [Download APK v1.0](https://github.com/aam19azmi/Al-Quran-Digital/releases/download/version/Al-Quran-Digital-v1.apk)

---

## 📥 Download Aplikasi Android
Gunakan tombol di bawah ini untuk mengunduh dan menginstal aplikasi langsung di smartphone kamu:

[![Download APK](https://img.shields.io/badge/Download-APK-brightgreen?style=for-the-badge&logo=android)](https://github.com/aam19azmi/Al-Quran-Digital/releases/download/version/Al-Quran-Digital-v1.apk)

> [!NOTE]
> Karena aplikasi ini tidak diunduh dari Play Store, saat instalasi mungkin muncul peringatan **"Play Protect"**. Silakan klik **"Detail Selengkapnya"** lalu **"Tetap Instal"**.

---

## ✨ Fitur Utama

* **Multi-Platform:** Web App & Android Native (APK).
* **Daftar Surah Lengkap:** 114 surah dengan nama Arab, Latin, arti, dan jumlah ayat.
* **Pencarian Real-time:** Mencari surah tanpa reload halaman.
* **Audio Murottal:** Pemutar audio terintegrasi di setiap surah.
* **Logika Kaligrafi:** Penambahan otomatis ﷽ (kecuali Al-Fatihah & At-Taubah).
* **UI/UX Modern:** Desain *Glassmorphism* yang responsif.

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3, JavaScript (ES6+).
* **Mobile Bridge:** [Capacitor](https://capacitorjs.com/).
* **Data Fetching:** Fetch API & Async/Await.
* **API:** [EQuran.id API V2](https://equran.id/apidev).

## 📂 Struktur Folder

```
Al-Quran-Digital/
├── android/            # Proyek Native Android
├── node_modules/       # Dependensi Node.js
├── www/                # Aset Web Utama (HTML, CSS, JS)
├── capacitor.config.json
├── CNAME               # Custom Domain
├── package.json
└── README.md
```


🚀 Cara Menjalankan & Pengembangan
1. Jalankan di Web (Local)
Buka Command Prompt kamu dan jalankan perintah berikut:

```
DOS

C:\> git clone [https://github.com/aam19azmi/Al-Quran-Digital.git](https://github.com/aam19azmi/Al-Quran-Digital.git)
C:\> cd Al-Quran-Digital
C:\> cd www
C:\> start index.html
```

2. Build ke Android (APK)
Pastikan Node.js, Java JDK, dan Android Studio sudah terinstal, lalu jalankan:

```
DOS

C:\Users\Azmi\Al-Quran-Digital> npm install
C:\Users\Azmi\Al-Quran-Digital> npx cap copy
C:\Users\Azmi\Al-Quran-Digital> npx cap open android
```


Di Android Studio: Pilih menu Build > Build Bundle(s) / APK(s) > Build APK(s).

🧠 Highlight Kode (Logic Penempatan Bismillah)
JavaScript

```
// Menampilkan Bismillah kecuali pada Surah Al-Fatihah (1) dan At-Taubah (9)
let bismillahHTML = '';
if (data.nomor !== 1 && data.nomor !== 9) {
    bismillahHTML = `
        <div class="bismillah-container">
            <div class="bismillah-text">﷽</div>
        </div>
    `;
}
```

🤝 Kontribusi & Credits
Data Al-Qur'an dan Audio disediakan oleh EQuran.id. Dikembangkan oleh Azmi Jalaluddin Amron sebagai portofolio pengembangan aplikasi multi-platform.

<p align="center"> Built with ❤️ by <a href="https://sourcecodejournal.dev">Source Code Journal</a> </p>
