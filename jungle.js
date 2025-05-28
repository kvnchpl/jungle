// Get references to key DOM elements.
const body = document.body;
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

// Store original inline background for restoration
const originalBg = body.style.backgroundImage;

// Apply background change effect when hovering over any link.
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (body.classList.contains('custom-bg')) {
            body.style.backgroundImage = 'none';
        } else {
            body.classList.add('solid-bg');
        }
    });
    link.addEventListener('mouseleave', () => {
        if (body.classList.contains('custom-bg')) {
            body.style.backgroundImage = originalBg;
        } else {
            body.classList.remove('solid-bg');
        }
    });
});

// Determine if a background image is already set on the body.
const computedBg = getComputedStyle(body).getPropertyValue("background-image");

// Apply default background image if none is set, otherwise mark as using a custom background.
if (!computedBg || computedBg === 'none' || computedBg === 'initial') {
    body.classList.add('use-default-bg');
} else {
    body.classList.add('custom-bg');
}