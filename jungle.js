const title = document.querySelector('.centered-title');

title.addEventListener('mouseenter', () => {
    document.body.classList.add('title-hover-bg');
});

title.addEventListener('mouseleave', () => {
    document.body.classList.remove('title-hover-bg');
});