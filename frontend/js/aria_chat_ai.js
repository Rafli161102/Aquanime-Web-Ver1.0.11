// frontend/js/aria_chat_manual.js

document.addEventListener('DOMContentLoaded', () => {
    const ariaChatPopupContainer = document.querySelector('.aria-chat-popup-container');
    const isHomepage = document.body.classList.contains('homepage-body') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html');

    if (ariaChatPopupContainer && isHomepage) {
        const ariaChatIcon = document.getElementById('aria-chat-icon');
        const ariaChatBox = document.getElementById('aria-chat-box');
        const closeChatBtn = document.getElementById('close-chat-btn');
        const chatMessagesContainer = document.getElementById('chat-messages');
        const chatInputField = document.getElementById('chat-input-field');
        const sendChatBtn = document.getElementById('send-chat-btn');
        const chatNotification = document.getElementById('chat-notification');

        // ========================================= //
        // DATABASE RESPON MANUAL ARIA CHAT          //
        // Keyword diperluas dan lebih spesifik.
        // ========================================= //
        const manualResponses = [
            {
                keywords: ['halo', 'hai', 'hi', 'salam', 'konbanwa', 'hey', 'hello', 'privet', 'apa kabar', 'selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam', 'howdy', 'yo', 'sup'],
                response: 'Konbanwa! ✨ Selamat datang di AquaNime! Apa kabar hari ini? Aria siap bantu kalau kamu butuh info! 😄'
            },
            {
                keywords: ['apa itu aquanime', 'tentang aquanime', 'aquanime apa', 'sejarah aquanime', 'info aquanime', 'kapan berdiri', 'awal mula aquanime', 'cerita aquanime'],
                response: 'AquaNime itu komunitas kreatif pecinta budaya Jepang! 🎨🎵 Awalnya dari "L-Army Ordinary Weebs" di 2017, lalu rebranding jadi AquaNime Ordinary Weebs di 2022! Visi kami? Jadi komunitas terdepan yang menginspirasi kreativitas! (＾▽＾)ノ'
            },
            {
                keywords: ['proyek', 'project', 'apa saja proyek', 'karya apa', 'project aquanime', 'daftar proyek', 'program kerja', 'kegiatan utama'],
                response: 'Di AquaNime ada banyak proyek keren! ✨ Ada Proyek Maskot Aria, Band, Light Novel, sama Jurnalistik. Tiap proyek punya tujuan unik buat kembangin kreativitas member. Cek halaman Proyek untuk detailnya ya! (●\'ω\'●)'
            },
            {
                keywords: ['maskot', 'aria', 'aria ayumi', 'siapa aria', 'tentang maskot', 'profil aria', 'karakter aria'],
                response: 'Aria itu maskot kesayangan kita! 💖 Dia berusia 18 tahun, lahir di Jakarta, dan punya semangat tinggi untuk mewujudkan mimpi. Perjalanan Aria mencerminkan semangat semua member AquaNime! Pengen tahu lebih banyak? Cek halaman Tentang kami ya! (*^▽^*)'
            },
            {
                keywords: ['gabung', 'join', 'cara gabung', 'ikut komunitas', 'daftar', 'ingin bergabung', 'member baru'],
                response: 'Mau gabung AquaNime? Yuk! 😄 Caranya gampang banget, tinggal baca Kode Etik, pilih platform (Discord/WhatsApp), isi formulir, terus verifikasi. Kunjungi halaman Komunitas kita untuk info selengkapnya ya! (｡>ω<｡)'
            },
            {
                keywords: ['event', 'acara', 'gathering', 'kumpul', 'jadwal event', 'seminar', 'workshop', 'kompetisi'],
                response: 'Kita sering adain event dan gathering seru, lho! 🥳 Ada workshop ilustrasi, kompetisi cosplay, meet & greet band, dan banyak lagi. Cek jadwal di halaman Portal atau media sosial kita buat info terbaru ya! ╰(°▽°)╯'
            },
            {
                keywords: ['kontak', 'email', 'hubungi', 'tanya', 'informasi kontak', 'telepon', 'alamat', 'sosial media'],
                response: 'Ada pertanyaan, saran, atau mau kolaborasi? ✉️ Kamu bisa kontak kami lewat email aquanime.ow@gmail.com, atau kunjungi halaman Kontak untuk opsi lain seperti hubungi founder atau tim PR. Aria tunggu ya! o(〃＾▽＾〃)o'
            },
            {
                keywords: ['dark mode', 'gelap', 'mode gelap', 'tema gelap', 'ubah tema'],
                response: 'Mode gelap aktif! 🌑 Semoga nyaman di mata ya pas lagi baca-baca di website AquaNime. Kalau mau balikin ke mode terang, klik lagi aja ikon bulan/mataharinya! (＾-＾)ノ'
            },
            {
                keywords: ['terima kasih', 'makasih', 'thank you', 'arigatou', 'terima kasih banyak', 'thanks'],
                response: 'Sama-sama! 😊 Senang banget bisa bantu kamu! Kalau ada lagi yang Aria bisa bantu, jangan sungkan tanya lagi ya! (´∀｀)♡'
            },
            {
                keywords: ['siapa kamu', 'kamu siapa', 'kamu bot', 'kamu ai', 'kamu robot'],
                response: 'Aria adalah maskot dari komunitas AquaNime, dan aku di sini untuk bantu kamu cari info seputar komunitas dan budaya Jepang! 😄'
            },
            {
                keywords: ['visi misi', 'visi', 'misi', 'tujuan aquanime'],
                response: 'Visi AquaNime adalah jadi komunitas terdepan yang inspiratif di budaya Jepang dan memperkuat hubungan antar member! Misinya? Perluas pengetahuan, dorong kreativitas, bangun komunitas inklusif, dan sediakan ruang kreasi. ✨'
            },
            {
                keywords: ['regional', 'divisi', 'jabodetabek', 'jawa barat', 'lokasi', 'kota', 'area'],
                response: 'AquaNime punya beberapa divisi (Kreatif, Event, Konten, Musik) dan fokus di regional Jabodetabek & Jawa Barat! 🗼🎌 Ada koordinator di Jakarta, Bogor, Depok, dan Bandung. Yuk kenalan sama regional kita! (｀･ω･´)ゞ'
            },
            {
                keywords: ['karya member', 'member', 'karya', 'fanart', 'tulisan', 'musik member', 'video member', 'galeri karya'],
                response: 'Kita bangga banget sama karya-karya member! 🌟 Ada ilustrasi, fanart, tulisan, musik, video, dan banyak lagi. Kamu bisa lihat di halaman Karya Member atau Portal Informasi! Kalau mau kirim karyamu juga bisa lho! 🥳'
            },
            {
                keywords: ['partner', 'kolaborasi', 'media', 'kerjasama', 'mitra'],
                response: 'AquaNime terbuka untuk partner dan kolaborasi! 🤝 Kami sudah bekerja sama dengan berbagai organisasi dan media besar seperti Bstation, ATX, RRI Jakarta, dan Suara.com. Kalau tertarik, langsung aja ke halaman Kontak kami, ya! (´ω｀)ノ'
            },
            {
                keywords: ['light novel', 'novel', 'aria novel', 'baca novel'],
                response: 'Kita punya Proyek Light Novel orisinal tentang Aria dan komunitas! 📖 Ceritanya seru, lho! Kamu bisa baca di halaman Komunitas -> Baca Light Novel Aria. Yuk, selami dunia Aria! ( •̀ ω •́ )✧'
            },
            {
                keywords: ['jurnalistik', 'berita', 'artikel', 'riset', 'info jepang'],
                response: 'Proyek Jurnalistik AquaNime siap kasih kamu info terbaru dan artikel menarik seputar anime, manga, dan budaya pop Jepang! 📰 Kita sajikan dalam video dan tulisan. Cek halaman Proyek untuk info lebih lanjut! 🤓'
            }
        ];

        function getManualResponse(userMessage) {
            const lowerCaseMessage = userMessage.toLowerCase();
            for (const entry of manualResponses) {
                for (const keyword of entry.keywords) {
                    if (lowerCaseMessage.includes(keyword)) {
                        return entry.response;
                    }
                }
            }
            // Fallback response jika tidak ada keyword yang cocok
            return 'Aria kurang paham, nih. 😵 Bisa tanyakan lagi atau coba topik tentang AquaNime atau budaya Jepang? 🙏 (´•ω•`)';
        }

        // Fungsi untuk menambahkan pesan ke chat box
        function addMessage(sender, text, avatarSrc) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            if (sender === 'user') {
                messageDiv.classList.add('user-message');
                messageDiv.innerHTML = `<p>${text}</p>`;
            } else { // bot message
                messageDiv.classList.add('bot-message');
                messageDiv.innerHTML = `<img src="${avatarSrc}" alt="Avatar" class="chat-avatar"><p>${text}</p>`;
            }
            chatMessagesContainer.appendChild(messageDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }

        // Handle sending message
        async function sendMessage() {
            const userMessage = chatInputField.value.trim();
            if (userMessage === "") return;

            addMessage('user', userMessage);
            chatInputField.value = ''; // Bersihkan input field

            // Simulate typing indicator
            const typingIndicatorDiv = document.createElement('div');
            typingIndicatorDiv.classList.add('message', 'bot-message', 'typing-indicator');
            typingIndicatorDiv.innerHTML = `<img src="${getPathToAssets() + 'images/aria_chibi_icon.png'}" alt="Aria Typing" class="chat-avatar"><p>...</p>`;
            chatMessagesContainer.appendChild(typingIndicatorDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

            // Get manual response after a small delay
            setTimeout(() => {
                chatMessagesContainer.removeChild(typingIndicatorDiv); // Hapus indikator mengetik
                const botReply = getManualResponse(userMessage); // Dapatkan respons manual
                addMessage('bot', botReply, getPathToAssets() + 'images/aria_chibi_icon.png'); // Gunakan icon Aria sebagai avatar bot
            }, Math.random() * 1000 + 500); // Penundaan acak antara 0.5 hingga 1.5 detik
        }

        // Helper untuk mendapatkan path relatif ke folder assets dari halaman mana pun
        function getPathToAssets() {
            const currentPath = window.location.pathname;
            if (currentPath.includes('/pages/') || currentPath.includes('/community/') || currentPath.includes('/legal/') || currentPath.includes('/aria_corner/') || currentPath.includes('/portal_details/')) {
                return '../assets/';
            }
            return 'assets/';
        }

        // Event Listeners for Chat
        if (ariaChatIcon && ariaChatBox && closeChatBtn && chatInputField && sendChatBtn) {
            ariaChatIcon.addEventListener('click', () => {
                ariaChatBox.classList.toggle('active');
                if (ariaChatBox.classList.contains('active')) {
                    ariaChatBox.classList.add('fade-in-anim');
                    chatNotification.style.display = 'none';
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
                    chatInputField.focus();
                } else {
                    ariaChatBox.classList.remove('fade-in-anim');
                }
            });

            closeChatBtn.addEventListener('click', () => {
                ariaChatBox.classList.remove('active');
                ariaChatBox.classList.remove('fade-in-anim');
            });

            sendChatBtn.addEventListener('click', sendMessage);

            chatInputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });

            // Pesan awal dari Aria saat chat box pertama kali dimuat
            if (chatMessagesContainer.children.length === 0) {
                 setTimeout(() => {
                    addMessage('bot', "Halo! 👋 Ada yang bisa Aria bantu hari ini? 😄", getPathToAssets() + 'images/aria_chibi_icon.png');
                }, 500);
            }
        }
    }
});