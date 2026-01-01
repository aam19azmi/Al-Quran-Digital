const surahListContainer = document.getElementById('surah-list-container');
const surahDetailContainer = document.getElementById('surah-detail-container');
const surahGrid = document.getElementById('surah-grid');
const loading = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');

let allSurahs = []; // Menyimpan data semua surah untuk fitur search

// 1. Fungsi Mengambil Daftar Surah
async function getSurahList() {
    showLoading(true);
    try {
        const response = await fetch('https://equran.id/api/v2/surat');
        const result = await response.json();
        
        if(result.code === 200) {
            allSurahs = result.data;
            displaySurahs(allSurahs);
        } else {
            alert('Gagal mengambil data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan koneksi');
    } finally {
        showLoading(false);
    }
}

// 2. Fungsi Menampilkan Card Surah ke HTML
function displaySurahs(surahs) {
    surahGrid.innerHTML = ''; // Reset isi grid
    
    surahs.forEach(surah => {
        const card = document.createElement('div');
        card.className = 'surah-card';
        card.onclick = () => getSurahDetail(surah.nomor); // Klik card -> buka detail
        
        card.innerHTML = `
            <div class="surah-left" style="display:flex; gap:15px; align-items:center;">
                <div class="surah-number">${surah.nomor}</div>
                <div class="surah-info">
                    <h3>${surah.namaLatin}</h3>
                    <p>${surah.arti} • ${surah.jumlahAyat} Ayat</p>
                </div>
            </div>
            <div class="surah-arab">
                ${surah.nama}
            </div>
        `;
        surahGrid.appendChild(card);
    });
}

// 3. Fungsi Mengambil Detail Surah (Ayat-ayat)
async function getSurahDetail(nomor) {
    showLoading(true);
    // Sembunyikan list, tampilkan detail kosong dulu
    surahListContainer.classList.add('hidden');
    surahDetailContainer.classList.remove('hidden');
    window.scrollTo(0,0); // Scroll ke atas

    try {
        const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
        const result = await response.json();

        if(result.code === 200) {
            renderDetail(result.data);
        }
    } catch (error) {
        console.error(Error, error);
    } finally {
        showLoading(false);
    }
}

// 4. Render Tampilan Detail
function renderDetail(data) {
    const headerInfo = document.getElementById('surah-header-info');
    const ayatContainer = document.getElementById('ayat-container');
    
    // 1. Render Header
    headerInfo.innerHTML = `
        <h2 style="margin-bottom:10px;">${data.namaLatin}</h2>
        <p style="font-size:1.2rem; font-family:var(--font-arab); margin-bottom:10px;">${data.nama}</p>
        <p class="text-sm">${data.arti} • ${data.tempatTurun} • ${data.jumlahAyat} Ayat</p>
        <div style="margin-top: 20px; background: rgba(255,255,255,0.2); padding: 10px; border-radius: 50px; display:inline-block; width:100%; max-width:400px;">
            <audio controls class="audio-player" style="width:100%; height:30px; outline:none;">
                <source src="${data.audioFull['05']}" type="audio/mpeg">
            </audio>
        </div>
    `;

    // 2. Logic Bismillah (Kecuali Al-Fatihah & At-Taubah)
    let bismillahHTML = '';
    if (data.nomor !== 1 && data.nomor !== 9) {
        bismillahHTML = `
            <div class="bismillah-container">
                <div class="bismillah-text">﷽</div>
            </div>
        `;
    }

    // 3. Render Daftar Ayat
    let ayatHTML = bismillahHTML; // Masukkan Bismillah dulu
    
    data.ayat.forEach(ayat => {
        // Konversi angka latin ke arab (Opsional, tapi bagus buat UI)
        // const nomorArab = ayat.nomorAyat.toLocaleString('ar-EG'); 
        
        ayatHTML += `
            <div class="ayat-item">
                <div class="ayat-header" style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="ayat-badge">${data.nomor}:${ayat.nomorAyat}</span>
                    </div>
                <div class="ayat-text">
                    ${ayat.teksArab}
                </div>
                <div class="ayat-translation">
                    <p>${ayat.teksIndonesia}</p>
                </div>
            </div>
        `;
    });
    
    ayatContainer.innerHTML = ayatHTML;
}

// 5. Fitur Search
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredSurahs = allSurahs.filter(surah => 
        surah.namaLatin.toLowerCase().includes(keyword) || 
        surah.arti.toLowerCase().includes(keyword)
    );
    displaySurahs(filteredSurahs);
});

// 6. Tombol Kembali
document.getElementById('backBtn').addEventListener('click', () => {
    surahDetailContainer.classList.add('hidden');
    surahListContainer.classList.remove('hidden');
    // Matikan audio jika sedang main saat kembali
    const audio = document.querySelector('audio');
    if(audio) audio.pause();
});

// Helper: Loading Spinner
function showLoading(state) {
    if(state) loading.classList.remove('hidden');
    else loading.classList.add('hidden');
}

// Jalankan saat pertama kali load
getSurahList();
