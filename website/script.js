(function () {
    const themes = ['dark', 'tokyonight', 'mocha', 'gruvbox', 'pinkie', 'light'];
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeNameSpan = document.getElementById('theme-name');
    const rainbowToggleBtn = document.getElementById('rainbow-toggle');
    const fxStatusSpan = document.getElementById('fx-status');

    function applyTheme(theme) {
        if (!themes.includes(theme)) {
            theme = 'dark';
        }
        document.body.setAttribute('data-theme', theme);
        if (themeNameSpan) {
            themeNameSpan.textContent = theme;
        }
        localStorage.setItem('frostsue_theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        applyTheme(themes[nextIndex]);
    }

    function applyFx(enabled) {
        if (enabled) {
            document.body.classList.remove('fx-disabled');
            if (fxStatusSpan) {
                fxStatusSpan.textContent = 'on';
            }
        } else {
            document.body.classList.add('fx-disabled');
            if (fxStatusSpan) {
                fxStatusSpan.textContent = 'off';
            }
        }
        localStorage.setItem('frostsue_fx', enabled ? 'true' : 'false');
    }

    function toggleFx() {
        const isCurrentlyDisabled = document.body.classList.contains('fx-disabled');
        applyFx(isCurrentlyDisabled);
    }

    const savedTheme = localStorage.getItem('frostsue_theme') || 'dark';
    const savedFx = localStorage.getItem('frostsue_fx');

    applyTheme(savedTheme);
    applyFx(savedFx !== 'false');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (rainbowToggleBtn) {
        rainbowToggleBtn.addEventListener('click', toggleFx);
    }
})();
