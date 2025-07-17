const body = document.body;
const isHome = body.classList.contains('home');
const titleContainer = document.querySelector('.grid-cc-wide:nth-of-type(1)');
const revealContainer = document.querySelector('.grid-cc-wide:nth-of-type(2)');
const title = titleContainer?.querySelector('.centered-title');
const hoverText = revealContainer?.querySelector('.hover-reveal-text');

// Homepage: fade to solid color on title hover
if (isHome && title && hoverText) {
    title.addEventListener('mouseenter', () => {
        body.classList.add('solid-bg');
        titleContainer.classList.add('hover-active');
        revealContainer.classList.add('hover-active');
    });

    title.addEventListener('mouseleave', () => {
        body.classList.remove('solid-bg');
        titleContainer.classList.remove('hover-active');
        revealContainer.classList.remove('hover-active');
    });

    hoverText.addEventListener('mouseenter', () => {
        titleContainer.classList.remove('hover-active');
        revealContainer.classList.add('hover-active');
    });

    hoverText.addEventListener('mouseleave', () => {
        revealContainer.classList.remove('hover-active');
        titleContainer.classList.add('hover-active');
    });
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
}