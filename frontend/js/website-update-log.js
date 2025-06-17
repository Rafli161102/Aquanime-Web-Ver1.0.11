// frontend/js/website-update-log.js

// Hapus baris ini:
// const { version } = require("react"); 

window.AquaNimeWebsiteUpdateLog = [
    {   version: "1.0.11",
        date: "2025-06-18",
        changes: [
            "Penyempurnaan Side bar Mobile yang tidak berfungsi dengan baik di beberapa halaman", "Memastikan side bar mobile berfungsi dengan baik di semua halaman, termasuk halaman portal dan sub-halaman.",
            "Perbaikan Bug pada Testimonial Slider", "Memperbaiki masalah pada testimonial slider yang menyebabkan transisi tidak berfungsi dengan baik di beberapa ukuran layar.",
            "Penyempurnaan Responsivitas Halaman Portal", "Meningkatkan responsivitas halaman portal agar lebih baik di berbagai ukuran layar.",
            "Penambahan terkait halaman di konten Portal semuanya dalam perbaikan",
            "Perbaikan pada pengiriman Email yang tidak berfungsi di beberapa halaman", "Memastikan pengiriman email melalui formulir kontak berfungsi dengan baik di semua halaman.",
            "Penyempurnaan Tampilan dan Responsivitas Header", "Meningkatkan tampilan dan responsivitas header di semua halaman, termasuk penyesuaian ukuran ikon sosial media.",
        ]
    },
    {
        version: "1.0.10",
        date: "2025-06-17",
        changes: [
            "Fitur Testimonial Slider: Menambahkan avatar di tengah setiap kartu testimonial.",
            "Fitur Testimonial Slider: Memperbaiki masalah 'ganti dan hilang' di mobile dengan mengandalkan native scroll dan menyesuaikan logika transform JS.",
            "Desain Testimonial Slider: Menerapkan tampilan yang lebih modern dan minimalis (latar belakang transparan, shadow lebih halus, border minimalis, ikon panah dan dot lebih simpel).",
            "Responsivitas Halaman Beranda: Meningkatkan responsivitas bagian proyek dengan mengatur ulang grid-template-columns di breakpoint tablet (2 kolom) dan mobile (1 kolom).",
            "Perbaikan Text Wrapping: Mengatasi teks yang keluar dari kartu proyek dengan menambahkan word-break: break-word.",
            "Halaman Struktur Organisasi: Membuat halaman baru 'pages/struktur_organisasi.html'.",
            "Navigasi Struktur Organisasi: Menambahkan link 'Struktur Organisasi' ke navbar utama dan halaman 'Tentang Kami'.",
            "Aria Chat: Mengganti fungsionalitas AI dengan sistem respons manual (rule-based) di 'js/aria_chat_manual.js'.",
            "Aria Chat: Memperluas dan membuat jawaban Aria lebih mendetail dan spesifik untuk berbagai kata kunci.",
            "Halaman Portal: Mengubah pesan 'Segera Hadir' menjadi 'Sedang Maintenance', termasuk penyesuaian warna teks di mode gelap.",
            "Halaman Portal: Mengganti ikon jam pasir dengan gambar Aria di halaman maintenance."
        ]
    },
    {
        version: "1.0.9",
        date: "2025-06-14",
        changes: [
            "Update log otomatis: Penambahan seluruh riwayat versi dan fitur utama dari versi 1.0.0 hingga 1.0.8 ke dalam sistem log JS.",
            "Penyempurnaan dokumentasi log versi, kini setiap update utama dan minor tercatat lengkap dengan codename, tanggal, dan fitur/fitur utama.",
            "Log kini dapat diintegrasikan dan ditampilkan dinamis di halaman Versi Website & Update Log.",
            "Penyesuaian format log agar konsisten dengan riwayat update sebelumnya dan mudah dibaca." 
        ]
    },
    {
        version: "1.0.8",
        date: "2025-06-14",
        changes: [
            "Penambahan log update otomatis yang dapat di-render dinamis di halaman Versi Website & Update Log.",
            "Pemisahan script utama menjadi file modular: sidebar.js, darkmode.js, header-scroll.js, scroll-anim.js, testimonial-slider.js, project-audio.js, contact-form.js.",
            "Integrasi seluruh file modular JS ke semua halaman frontend, menggantikan script.js.",
            "Sidebar mobile kini memiliki animasi slide-in/out, kategori menu interaktif, dan navigasi antar kategori/sub-menu.",
            "Perbaikan aksesibilitas sidebar (tabindex, keyboard navigation).",
            "Testimonial slider, dark mode, animasi scroll, dan audio project kini sepenuhnya modular.",
            "Struktur dan import script pada seluruh halaman sudah konsisten.",
            "Penambahan dokumentasi singkat pada setiap file modular."
        ]
    },
    {
        version: "1.0.7",
        date: "2025-06-13 (21:00 WIB)",
        changes: [
            "Integrasi EmailJS untuk mengirim pesan dari formulir kontak.",
            "Penyempurnaan lebih lanjut pada tampilan dan responsivitas header, termasuk penyesuaian ukuran ikon sosial media di header untuk tampilan mobile.",
            "Penambahan fitur pencarian yang lebih canggih di halaman portal, memungkinkan pengguna untuk mencari berdasarkan kategori atau tag tertentu.",
            "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website.",
            "Perbaikan bug pada testimonial slider untuk memastikan transisi yang lebih halus dan responsif.",
            "Peningkatan performa halaman portal dengan optimasi gambar dan skrip.",
            "Penambahan ikon sosial media di footer untuk semua halaman kecuali beranda.",
            "Penyempurnaan struktur folder website untuk memudahkan pengelolaan aset.",
            "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website."
        ]
    },
    {
        version: "1.0.6",
        date: "2025-06-13 (15:30 WIB)",
        changes: [
            "Penyempurnaan lebih lanjut pada tampilan dan responsivitas header, termasuk penyesuaian ukuran ikon sosial media di header untuk tampilan mobile.",
            "Penambahan fitur pencarian yang lebih canggih di halaman portal, memungkinkan pengguna untuk mencari berdasarkan kategori atau tag tertentu.",
            "Perbaikan minor pada beberapa elemen UI untuk meningkatkan konsistensi desain di seluruh website."
        ]
    },
    {
        version: "1.0.5",
        date: "2025-06-12 (13:55 WIB)",
        changes: [
            "Penyempurnaan Header dan Navigasi: Merapikan tampilan header dan navigasi agar tidak terlalu besar, serta meningkatkan responsivitas dari desktop hingga mobile ukuran terkecil. Penyesuaian meliputi: Mengurangi padding vertikal header, Menyesuaikan ukuran logo dan teks logo, Mengurangi margin dan ukuran font menu navigasi utama, Menyesuaikan ukuran ikon sosial media, Mengurangi ukuran hamburger menu, Mengoptimalkan penempatan dan ukuran toggle bahasa dan dark mode, serta mengatur urutan elemen di header untuk responsivitas yang lebih baik, Menyembunyikan ikon sosial media di header untuk tampilan mobile terkecil.",
            "Penambahan Search Engine pada Halaman Portal: Menambahkan fungsionalitas mesin pencari lokal hanya di halaman `pages/portal.html` untuk memudahkan pengguna mencari konten portal. Fitur ini meliputi: Input dan tombol pencarian baru di halaman portal, Fungsionalitas untuk menampilkan atau menyembunyikan item daftar berdasarkan kata kunci pencarian, Penyesuaian gaya untuk search bar di mode terang dan gelap, serta responsivitas di berbagai ukuran layar."
        ]
    },
    {
        version: "1.0.4",
        date: "2025-06-11 (22:00 WIB)",
        changes: [
            "Perbaikan bug path relatif (`../../` menjadi `../`) di seluruh file HTML dalam folder pages/, community/, legal/, aria_corner/, dan portal_details/.",
            "Memastikan integrasi CSS, JS, dan aset gambar/audio bekerja dengan benar di semua sub-halaman."
        ]
    },
    {
        version: "1.0.3",
        date: "2025-06-11 (21:20 WIB)",
        changes: [
            "Pembaruan background header di seluruh website: selalu dark blue dengan opacity saat awal halaman (kecuali beranda yang transparan di awal).",
            "Penyesuaian ukuran font di navbar, hero content, dan content-section agar lebih proporsional.",
            "Pengoptimalan ukuran dan posisi shapes serta ikon di seluruh website untuk kerapian di desktop dan mobile.",
            "Perbaikan masalah z-index dan pointer-events untuk memastikan semua tombol dan slider dapat diklik.",
            "Penambahan ikon sosial media di footer untuk semua halaman kecuali beranda."
        ]
    },
    {
        version: "1.0.2",
        date: "2025-06-11 (19:00 WIB)",
        changes: [
            "Struktur folder website dirapikan dan diorganisir ulang (menambahkan pages/, community/, legal/, aria_corner/, portal_details/).",
            "Semua path relatif di file HTML disesuaikan (../ untuk naik satu level) agar sesuai dengan struktur folder baru."
        ]
    },
    {
        version: "1.0.1",
        date: "2025-06-11 (17:30 WIB)",
        changes: [
            "Perbaikan bug live chat Aria AI (kesalahan API 404 pada Gemini) dengan memastikan model dan URL API yang benar.",
            "Optimalisasi tampilan mobile untuk berbagai elemen seperti header, content-section, testimonial slider, dan shapes.",
            "Memastikan elemen interaktif (tombol, slider) dapat diklik di atas overlay."
        ]
    },
    {
        version: "1.0.0",
        date: "2025-06-11 (15:00 WIB)",
        changes: [
            "Peluncuran resmi website AquaNime.",
            "Desain dan tata letak responsif penuh untuk Desktop, Tablet, dan Mobile.",
            "Implementasi background gambar tunggal dengan efek parallax di semua halaman.",
            "Header dinamis (transparan di atas, solid saat discroll).",
            "Fitur Live Chat AI Aria Chibi (integrasi Google Gemini AI untuk demo).",
            "Testimonial Slider interaktif di halaman beranda.",
            "Fungsionalitas Audio pada kartu proyek.",
            "Struktur folder website yang lebih rapi untuk kemudahan navigasi dan pengelolaan.",
            "Penambahan halaman Legal & Info Teknis, Aria's Corner, dan detail Portal."
        ]
    },
    {
        version: "0.9.0",
        date: "2025-05-20",
        changes: [
            "Pengembangan fitur dasar website dan halaman utama.",
            "Implementasi responsivitas awal.",
            "Konfigurasi palet warna dan tipografi."
        ]
    },
    // Tambahkan log versi berikutnya di sini...
];

// Fungsi opsional untuk menampilkan log di halaman
window.renderAquaNimeUpdateLog = function(containerSelector) {
    const log = window.AquaNimeWebsiteUpdateLog;
    const container = typeof containerSelector === "string"
        ? document.querySelector(containerSelector)
        : containerSelector;
    if (!container || !log) return;
    container.innerHTML = log.map(entry => `
        <div class="update-log-entry">
            <h4>Versi ${entry.version} <span style="font-weight:normal;">(${entry.date})</span></h4>
            <ul>
                ${entry.changes.map(change => `<li>${change}</li>`).join('')}
            </ul>
        </div>
    `).join('');
};
