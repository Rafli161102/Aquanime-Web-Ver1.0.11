document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    let currentAudio = null;
    projectCards.forEach(card => {
        const audioSrc = card.dataset.audio;
        const playBtn = card.querySelector('.play-audio-btn');
        if (audioSrc && playBtn) {
            playBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const fullAudioSrc = audioSrc.replace('../audio/', '../assets/audio/').replace('audio/', 'assets/audio/');
                if (currentAudio && currentAudio.src === new URL(fullAudioSrc, window.location.href).href) {
                    currentAudio.pause();
                    currentAudio = null;
                    playBtn.innerHTML = `<i class="fas fa-play"></i> Dengar Audio`;
                    playBtn.classList.remove('playing');
                } else {
                    if (currentAudio) {
                        currentAudio.pause();
                        document.querySelectorAll('.play-audio-btn').forEach(btn => {
                            if (btn !== playBtn) {
                                btn.innerHTML = `<i class="fas fa-play"></i> Dengar Audio`;
                                btn.classList.remove('playing');
                            }
                        });
                    }
                    currentAudio = new Audio(fullAudioSrc);
                    currentAudio.play().then(() => {
                        playBtn.innerHTML = `<i class="fas fa-pause"></i> Sedang Diputar`;
                        playBtn.classList.add('playing');
                    }).catch(error => {
                        console.error('Error playing audio:', error);
                        alert('Tidak dapat memutar audio. Pastikan file tersedia dan format didukung. Browser mungkin memblokir autoplay.');
                    });
                    currentAudio.onended = () => {
                        playBtn.innerHTML = `<i class="fas fa-play"></i> Dengar Audio`;
                        playBtn.classList.remove('playing');
                        currentAudio = null;
                    };
                }
            });
        }
    });
});
