const computedBg = getComputedStyle(body).getPropertyValue("background-image");

if (!computedBg || computedBg === 'none' || computedBg === 'initial') {
    body.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--background-image-home');
} else {
    body.classList.add('custom-bg');
}

const body = document.body;
const title = document.querySelector('.centered-title');
const hoverText = document.querySelector('.hover-reveal-text');

if (title) {
    title.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    title.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));
    if (hoverText) {
        title.addEventListener('mouseenter', () => {
            hoverText.style.opacity = '1';
            hoverText.setAttribute('aria-hidden', 'false');
        });
        title.addEventListener('mouseleave', () => {
            hoverText.style.opacity = '0';
            hoverText.setAttribute('aria-hidden', 'true');
        });
    }
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    link.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));
});