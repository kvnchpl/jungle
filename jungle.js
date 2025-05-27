const title = document.querySelector('.centered-title');
const body = document.body;

let overlayTimeout;

title.addEventListener('mouseenter', () => {
    // Start fading in the overlay
    body.classList.add('no-bg-image');

    // After transition ends, remove background-image (visually smoother)
    overlayTimeout = setTimeout(() => {
        body.style.backgroundImage = 'none';
    }, 800); // match CSS transition duration
});

title.addEventListener('mouseleave', () => {
    // Reset: restore background image immediately
    clearTimeout(overlayTimeout);
    body.style.backgroundImage = 'var(--background-image-home)';
    body.classList.remove('no-bg-image');
});