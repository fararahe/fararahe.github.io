/**
 * Image Service
 * Handles responsive image loading and fallback candidate resolution.
 */
window.ImageService = {
    handleLoad(img) {
        img.classList.remove('opacity-0');
        const placeholder = img.previousElementSibling;
        if (placeholder && placeholder.classList.contains('placeholder-box')) {
            placeholder.style.display = 'none';
        }
    },

    handleFallback(img) {
        const rawCandidates = img.getAttribute('data-candidates') || '';
        const candidates = rawCandidates.split(',').map(s => s.trim()).filter(Boolean);
        let idx = parseInt(img.dataset.tryIndex || '0', 10);

        if (idx < candidates.length) {
            img.dataset.tryIndex = idx + 1;
            img.src = candidates[idx];
        } else {
            img.style.display = 'none';
            const placeholder = img.previousElementSibling;
            if (placeholder && placeholder.classList.contains('placeholder-box')) {
                placeholder.style.display = 'flex';
            }
        }
    }
};

// Global bindings for inline HTML element event listeners
window.handleImageLoad = function(img) {
    window.ImageService.handleLoad(img);
};

window.handleImageFallback = function(img) {
    window.ImageService.handleFallback(img);
};
