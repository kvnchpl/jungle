document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const inlineBg = body.getAttribute('style');

    if (inlineBg?.includes('background-image')) {
        body.classList.add('has-inline-bg');
    }

    const title = document.querySelector('.centered-title');
    if (!title) return;

    const hoverText = document.querySelector('.hover-reveal-text');

    // Delay hover listeners to avoid false initial triggers
    setTimeout(() => {
        const toggleSolidBg = (e) =>
            body.classList.toggle('solid-bg', e.type === 'mouseenter');
        title.addEventListener('mouseenter', toggleSolidBg);
        title.addEventListener('mouseleave', toggleSolidBg);

        if (hoverText) {
            const toggleHoverText = (e) =>
                hoverText.classList.toggle('hover-revealed', e.type === 'mouseenter');
            title.addEventListener('mouseenter', toggleHoverText);
            title.addEventListener('mouseleave', toggleHoverText);
        }
    }, 100);

    body.classList.add('js-ready');
});