const title = document.querySelector('.centered-title');
const body = document.body;

let overlayTimeout;
let hasInteracted = false;

title.addEventListener('mouseenter', () => {
    // Ensure image is set before the first transition
    if (!hasInteracted) {
        body.style.backgroundImage = 'var(--background-image-home)';
        hasInteracted = true;
    }

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