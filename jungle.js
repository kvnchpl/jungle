// Get references to key DOM elements.
const title = document.querySelector('.centered-title');
const hoverText = document.querySelector('.hover-reveal-text');

// If a centered title exists, enable background and hover text interactions.
if (title) {
    // Change background to solid color on hover, and revert on mouse leave.
    title.addEventListener('mouseenter', () => body.classList.add('solid-bg'));
    title.addEventListener('mouseleave', () => body.classList.remove('solid-bg'));
    // If hover text exists, toggle its visibility when the title is hovered.
    if (hoverText) {
        title.addEventListener('mouseenter', () => {
            hoverText.style.opacity = '1';
            hoverText.setAttribute('aria-hidden', 'false');
        });
        title.addEventListener('mouseleave', () => {
            hoverText.style.opacity = '0';
            hoverText.setAttribute('aria-hidden', 'true');
        });
    }
}