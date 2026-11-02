/**
 * Theme Service
 * Manages dark/light mode state, persistence, and UI synchronization.
 */
window.ThemeService = {
    STORAGE_KEY: 'theme',

    init() {
        this.toggleBtn = document.getElementById('themeToggleBtn');
        this.iconSun = document.getElementById('themeIconSun');
        this.iconMoon = document.getElementById('themeIconMoon');

        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggleTheme());
        }

        this.syncIcons();
    },

    isDark() {
        return document.documentElement.classList.contains('dark');
    },

    setTheme(theme) {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
            localStorage.setItem(this.STORAGE_KEY, 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem(this.STORAGE_KEY, 'light');
        }
        this.syncIcons();
    },

    toggleTheme() {
        this.setTheme(this.isDark() ? 'light' : 'dark');
    },

    syncIcons() {
        if (!this.iconSun || !this.iconMoon) return;
        if (this.isDark()) {
            this.iconSun.classList.remove('hidden');
            this.iconMoon.classList.add('hidden');
        } else {
            this.iconSun.classList.add('hidden');
            this.iconMoon.classList.remove('hidden');
        }
    }
};
