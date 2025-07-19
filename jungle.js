const body = document.body;
const isHome = body.classList.contains('home');

const bgImage = body.dataset.bgImage?.trim();
const bgColor = body.dataset.bgColor?.trim();

if (bgImage) {
    body.style.backgroundImage = `url('${bgImage}')`;
} else if (!isHome) {
    body.classList.add('solid-bg');
    body.style.backgroundImage = 'none';
    body.style.backgroundColor =
        bgColor || getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
}