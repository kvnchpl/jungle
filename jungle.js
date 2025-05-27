const title = document.querySelector('.centered-title');
const body = document.body;

title.addEventListener('mouseenter', () => {
    body.classList.add('solid-bg');
});
title.addEventListener('mouseleave', () => {
    body.classList.remove('solid-bg');
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        body.classList.add('solid-bg');
    });
    link.addEventListener('mouseleave', () => {
        body.classList.remove('solid-bg');
    });
});