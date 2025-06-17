document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    function initializeDarkMode() {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        let darkModeEnabled = localStorage.getItem('aquanimeDarkMode');
        if (darkModeEnabled === null) {
            darkModeEnabled = prefersDarkMode ? 'true' : 'false';
            localStorage.setItem('aquanimeDarkMode', darkModeEnabled);
        }
        if (darkModeEnabled === 'true') {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode_preload');
            if (darkModeToggle) {
                darkModeToggle.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
            }
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark-mode_preload');
            if (darkModeToggle) {
                darkModeToggle.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
            }
        }
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('aquanimeDarkMode', isDarkMode ? 'true' : 'false');
            if (isDarkMode) {
                darkModeToggle.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
            } else {
                darkModeToggle.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
            }
        });
        initializeDarkMode();
    }
});
