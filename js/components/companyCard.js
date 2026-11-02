/**
 * Company Card Component
 * Renders professional journey timeline cards.
 */
window.CompanyCardComponent = {
    render(company) {
        const color = company.accentColor || 'indigo';
        const highlightsHtml = (company.highlights && company.highlights.length > 0) ? `
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-400 mb-5">
                ${company.highlights.map(h => `
                    <li class="flex items-start gap-2">
                        <span class="text-${color}-400">▹</span>
                        <span>${h}</span>
                    </li>
                `).join('')}
            </ul>` : '';

        const skillsHtml = (company.skills || []).map(s => `
            <span class="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">${s}</span>
        `).join('');

        return `
            <div class="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-${color}-500/10 text-${color}-400 border border-${color}-500/20">${company.badge}</span>
                            <span class="text-xs text-slate-400">${company.location}</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mt-1">${company.name}</h3>
                    </div>
                    <div class="text-left md:text-right">
                        <span class="text-sm font-semibold text-slate-200">${company.role}</span>
                        <div class="text-xs font-mono text-slate-400">${company.period}</div>
                    </div>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">
                    ${company.description}
                </p>
                ${highlightsHtml}
                <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    ${skillsHtml}
                </div>
            </div>`;
    }
};
