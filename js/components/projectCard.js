/**
 * Project Card Component
 * Renders portfolio project showcase cards and mockups.
 */
window.ProjectCardComponent = {
    renderIcon(icon) {
        switch (icon) {
            case 'credit-card':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>';
            case 'location':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>';
            case 'desktop':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>';
            case 'book':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>';
            case 'chip':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>';
            case 'clock':
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
            case 'terminal':
            default:
                return '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>';
        }
    },

    renderVisualSlot(project) {
        if (project.mockupType === 'drupal-portal') {
            return `
                <div class="drupal-web-mockup relative w-full aspect-[16/10] bg-[#090d16] border-b border-slate-800 p-3 sm:p-3.5 font-sans text-xs flex flex-col justify-between overflow-hidden">
                    <div class="mockup-browser-bar flex items-center justify-between pb-2 border-b border-slate-800/80">
                        <div class="flex items-center gap-1.5 shrink-0">
                            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <span class="text-[10px] font-mono text-slate-500">Genomics Data Platform</span>
                    </div>
                    <div class="flex items-center justify-between pt-1">
                        <div class="flex items-center gap-2">
                            <span class="w-5 h-5 rounded-md bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </span>
                            <span class="mockup-title font-bold text-white text-xs tracking-tight">APBioNET Genomics Portal</span>
                        </div>
                    </div>
                    <div class="mockup-card my-auto bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5 space-y-2">
                        <div class="flex items-center justify-between text-[10px]">
                            <span class="text-slate-400 font-medium">VCF Dataset Transformation Engine</span>
                            <span class="text-emerald-400 font-mono text-[9px] flex items-center gap-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ready
                            </span>
                        </div>
                        <div class="mockup-input-box flex items-center justify-between gap-2 bg-slate-900/80 border border-slate-800 rounded-lg px-2.5 py-1 text-[10px] font-mono">
                            <div class="flex items-center gap-1.5 text-slate-300 truncate">
                                <span class="text-slate-500">Dataset:</span>
                                <span class="text-indigo-300 truncate">genotypes_sample.vcf</span>
                            </div>
                            <span class="text-slate-500 text-[9px] shrink-0">12,480 SNPs</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 pt-0.5">
                            <div class="text-[9px] text-slate-400 font-mono">Target: <span class="text-violet-300">LD Matrix (.hmp)</span></div>
                            <span class="px-2.5 py-1 rounded-md bg-indigo-600 text-white font-semibold text-[10px] flex items-center gap-1 shadow-xs">
                                <span>Export .hmp</span>
                                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[9px] text-slate-400 font-mono">
                        <span>Perdana University Research</span>
                        <span class="text-slate-500">PHP • Drupal • Scientific Web Tool</span>
                    </div>
                </div>`;
        }

        const color = project.accentColor || 'indigo';
        const candidates = (project.candidates || [project.image]).join(',');

        return `
            <div class="relative w-full aspect-[16/10] bg-slate-900 border-b border-slate-800 overflow-hidden group">
                <div class="placeholder-box absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-${color}-950/40 to-slate-900">
                    <div class="w-14 h-14 rounded-2xl bg-${color}-500/10 border border-${color}-500/30 text-${color}-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        ${this.renderIcon(project.icon)}
                    </div>
                    <span class="text-sm font-semibold text-slate-200">${project.title}</span>
                    <span class="text-xs text-slate-500 font-mono mt-1">${project.tagline || ''}</span>
                    <span class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-slate-400">
                        <svg class="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Slot: ${project.image}</span>
                    </span>
                </div>
                <img src="${project.image}" alt="${project.title}"
                    data-candidates="${candidates}"
                    class="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-300"
                    onload="handleImageLoad(this)"
                    onerror="handleImageFallback(this)">
            </div>`;
    },

    render(project) {
        const color = project.accentColor || 'indigo';
        const techBadges = (project.tech || []).map(t => `<span class="px-2 py-0.5 rounded bg-slate-800">${t}</span>`).join('');

        return `
            <article class="project-card flex flex-col rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden hover:border-slate-700 transition"
                data-category="${project.category}" data-title="${project.title}">
                ${this.renderVisualSlot(project)}
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                            <span class="text-${color}-400 font-semibold">${project.company}</span>
                            <span>${project.year}</span>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">${project.title}</h3>
                        <p class="text-xs text-slate-400 leading-relaxed mb-4">
                            ${project.description}
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-1 font-mono text-[10px] text-slate-300 pt-3 border-t border-slate-800/60">
                        ${techBadges}
                    </div>
                </div>
            </article>`;
    }
};
