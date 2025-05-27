const title = document.querySelector('.centered-title');
const body = document.body;
title.addEventListener('mouseenter', () => {
    body.classList.add('solid-bg');
});
title.addEventListener('mouseleave', () => {
    body.classList.remove('solid-bg');
});