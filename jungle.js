const title = document.querySelector('.centered-title');
const body = document.body;

if (title) {
    title.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    title.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    link.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));
});