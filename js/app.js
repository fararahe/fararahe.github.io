/**
 * Main Application Orchestrator
 * Bootstraps presentation components, services, and repositories.
 */
window.App = {
    async init() {
        // Initialize Theme Service
        if (window.ThemeService) {
            window.ThemeService.init();
        }

        // Initialize UI Interactions (Clipboard, Mobile Menu)
        this.initUIInteractions();

        // Load and render Companies Timeline
        await this.loadCompanies();

        // Load and render Projects Showcase
        await this.loadProjects();
    },

    async loadCompanies() {
        const container = document.getElementById('companiesList');
        if (!container || !window.PortfolioRepository || !window.CompanyCardComponent) return;

        const companies = await window.PortfolioRepository.getCompanies();
        container.innerHTML = companies.map(c => window.CompanyCardComponent.render(c)).join('');
    },

    async loadProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid || !window.PortfolioRepository || !window.ProjectCardComponent) return;

        const projects = await window.PortfolioRepository.getProjects();
        grid.innerHTML = projects.map(p => window.ProjectCardComponent.render(p)).join('');

        this.updateFilterCounts(projects);
        this.initFilterEvents();
    },

    updateFilterCounts(projects) {
        const counts = {
            all: projects.length,
            company: projects.filter(p => p.category.includes('company')).length,
            personal: projects.filter(p => p.category.includes('personal')).length,
            fintech: projects.filter(p => p.category.includes('fintech')).length,
            web: projects.filter(p => p.category.includes('web')).length
        };

        document.querySelectorAll('.filter-btn').forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            if (filter === 'all') btn.textContent = `All Projects (${counts.all})`;
            if (filter === 'company') btn.textContent = `Company Enterprise (${counts.company})`;
            if (filter === 'personal') btn.textContent = `Personal & Studio (${counts.personal})`;
            if (filter === 'fintech') btn.textContent = `Android & FinTech (${counts.fintech})`;
            if (filter === 'web') btn.textContent = `Web & Platforms (${counts.web})`;
        });
    },

    initFilterEvents() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');

                filterBtns.forEach(b => {
                    b.classList.remove('bg-indigo-600', 'text-white');
                    b.classList.add('bg-slate-900', 'text-slate-400');
                });
                btn.classList.add('bg-indigo-600', 'text-white');
                btn.classList.remove('bg-slate-900', 'text-slate-400');

                const cards = document.querySelectorAll('.project-card');
                cards.forEach(card => {
                    const categories = card.getAttribute('data-category') || '';
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    },

    initUIInteractions() {
        // Copy Email Button
        const copyEmailBtn = document.getElementById('copyEmailBtn');
        const copyEmailText = document.getElementById('copyEmailText');
        if (copyEmailBtn && copyEmailText) {
            copyEmailBtn.addEventListener('click', () => {
                navigator.clipboard.writeText('faradyna.rahma@gmail.com').then(() => {
                    copyEmailText.textContent = 'Copied!';
                    setTimeout(() => {
                        copyEmailText.textContent = 'Copy Email';
                    }, 2000);
                });
            });
        }

        // Mobile Menu Button
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
};

// Bootstrap application once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.App.init());
} else {
    window.App.init();
}
