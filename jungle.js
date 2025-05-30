const body = document.body;
const title = document.querySelector('.centered-title');
const hoverText = document.querySelector('.hover-reveal-text');
const isHome = body.classList.contains('home');

// Only run interactive background change on the homepage
if (isHome && title) {
    title.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    title.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));

    if (hoverText) {
        title.addEventListener('mouseenter', () => {
            hoverText.classList.add('hover-revealed');
        });
        title.addEventListener('mouseleave', () => {
            hoverText.classList.remove('hover-revealed');
        });
    }
}

// On non-home pages, if no inline background-image is set, add solid background
if (!isHome) {
    const hasInlineBackground = body.style.backgroundImage && body.style.backgroundImage !== 'none';
    if (!hasInlineBackground) {
        body.classList.add('solid-bg');
    }
}