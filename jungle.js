const title = document.querySelector('.centered-title');

title.addEventListener('mouseenter', () => {
    document.body.classList.add('no-bg-image');
});

title.addEventListener('mouseleave', () => {
    document.body.classList.remove('no-bg-image');
});