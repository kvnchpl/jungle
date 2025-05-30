const body = document.body;
const title = document.querySelector('.centered-title');
const hoverText = document.querySelector('.hover-reveal-text');
const isHome = body.classList.contains('home');

// Homepage: fade to solid color on title hover
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

// Other pages: solid background if no background-image is set
if (!isHome) {
    const hasInlineBackground = body.style.backgroundImage && body.style.backgroundImage !== 'none';
    const customBgColor = body.dataset.bgColor;

    if (!hasInlineBackground) {
        body.classList.add('solid-bg');
        if (customBgColor) {
            body.style.backgroundColor = customBgColor;
        }
    }
}