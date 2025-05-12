const historyKey = "jungleHistory";
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

// Get current path (relative to root, without domain)
const currentPath = window.location.pathname.replace(/^\/+/, "");

// Load and update session history
let jungleHistory = JSON.parse(sessionStorage.getItem(historyKey) || "[]");

// Avoid duplicating if user reloads same page
if (jungleHistory[jungleHistory.length - 1] !== currentPath) {
    jungleHistory.push(currentPath);
    sessionStorage.setItem(historyKey, JSON.stringify(jungleHistory));
}

// Find current index in history
const currentIndex = jungleHistory.lastIndexOf(currentPath);

// Determine previous and next paths
const previousPath = currentIndex > 0 ? jungleHistory[currentIndex - 1] : null;
const nextPath = currentIndex < jungleHistory.length - 1 ? jungleHistory[currentIndex + 1] : null;

// Update back arrow
if (previousPath) {
    backArrow.href = "/" + previousPath;
    backArrow.style.display = "inline";
} else {
    backArrow.style.display = "none";
}

// Update forward arrow
if (nextPath) {
    forwardArrow.href = "/" + nextPath;
    forwardArrow.style.display = "inline";
} else {
    forwardArrow.style.display = "none";
}