const title = document.querySelector('.centered-title');

title.addEventListener('mouseenter', () => {
    document.body.classList.add('fullscreen-image');
    document.body.style.setProperty('--fullscreen-bg-image', "url('a/i/jungle_1_bw.png')");
});

title.addEventListener('mouseleave', () => {
    document.body.classList.remove('fullscreen-image');
    document.body.style.removeProperty('--fullscreen-bg-image');
});