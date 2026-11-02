/**
 * Portfolio Data Repository
 * Provides access to canonical project and company records.
 */
window.PortfolioRepository = {
    /**
     * Retrieve all project records.
     * @returns {Array} Array of project objects.
     */
    getProjects() {
        if (window.PROJECTS_DATA && Array.isArray(window.PROJECTS_DATA)) {
            return window.PROJECTS_DATA;
        }
        return [];
    },

    /**
     * Retrieve all company career records.
     * @returns {Array} Array of company objects.
     */
    getCompanies() {
        if (window.COMPANIES_DATA && Array.isArray(window.COMPANIES_DATA)) {
            return window.COMPANIES_DATA;
        }
        return [];
    }
};
