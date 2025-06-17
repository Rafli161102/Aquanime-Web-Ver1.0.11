document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-target');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-anim');
            } else {
                entry.target.classList.remove('fade-in-anim');
            }
        });
    }, observerOptions);
    elementsToAnimate.forEach(element => {
        animateObserver.observe(element);
    });
});
