const title = document.querySelector('.centered-title');
const body = document.body;
title.addEventListener('mouseenter', () => {
    body.classList.add('no-bg-image');
});
title.addEventListener('mouseleave', () => {
    body.classList.remove('no-bg-image');
});