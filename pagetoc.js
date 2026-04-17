// Per-page table of contents for mdBook.
// Scans the current page's h2/h3 headings, injects a floating right-side TOC,
// and highlights the heading closest to the top of the viewport as you scroll.
// Styles live in pagetoc.css.

(function () {
    function slugify(text) {
        return text.trim().toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    }

    function init() {
        const content = document.querySelector('main') || document.querySelector('.content');
        if (!content) return;

        const headings = Array.from(content.querySelectorAll('h2, h3'));

        // No point rendering a TOC on sparse pages (e.g. short appendices).
        if (headings.length < 2) return;

        // mdBook usually adds ids to headings, but fall back to a slug if missing.
        headings.forEach(function (h) {
            if (!h.id) h.id = slugify(h.textContent);
        });

        const toc = document.createElement('nav');
        toc.className = 'pagetoc';
        toc.setAttribute('aria-label', 'On this page');

        const title = document.createElement('div');
        title.className = 'pagetoc-title';
        title.textContent = 'On this page';
        toc.appendChild(title);

        const ul = document.createElement('ul');
        headings.forEach(function (h) {
            const li = document.createElement('li');
            li.className = h.tagName.toLowerCase();

            const a = document.createElement('a');
            a.href = '#' + h.id;
            a.textContent = h.textContent.trim();
            li.appendChild(a);
            ul.appendChild(li);
        });
        toc.appendChild(ul);

        document.body.appendChild(toc);

        const links = Array.from(toc.querySelectorAll('a'));

        function updateActive() {
            // Highlight the last heading whose top is above the viewport's
            // 1/4 line — gives a natural "you're reading this section" feel.
            const threshold = window.scrollY + window.innerHeight * 0.25;
            let activeIdx = 0;
            for (let i = 0; i < headings.length; i++) {
                if (headings[i].getBoundingClientRect().top + window.scrollY <= threshold) {
                    activeIdx = i;
                }
            }
            for (let i = 0; i < links.length; i++) {
                links[i].classList.toggle('active', i === activeIdx);
            }
        }

        // rAF-throttle to keep scroll cheap on long pages.
        let ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    updateActive();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        updateActive();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
