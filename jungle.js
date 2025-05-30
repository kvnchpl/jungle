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

// All pages: apply background based on data attributes
const bgImage = body.dataset.bgImage?.trim();
const bgColor = body.dataset.bgColor?.trim();

// Apply background image or color for all pages
if (bgImage) {
    body.style.backgroundImage = `url('${bgImage}')`;
} else if (!isHome) {
    body.classList.add('solid-bg');
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = bgColor || getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
} else {
    // Ensure homepage starts with background image
    body.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--background-image-default');
}