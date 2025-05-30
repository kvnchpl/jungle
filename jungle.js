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
const bgImage = body.dataset.bgImage;
const bgColor = body.dataset.bgColor;

if (bgImage) {
    body.style.backgroundImage = `url('${bgImage}')`;
} else {
    body.classList.add('solid-bg');
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = bgColor || getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
}