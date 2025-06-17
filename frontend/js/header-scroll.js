document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        }
    }
});
