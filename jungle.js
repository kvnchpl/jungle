const historyKey = "jungleHistory";
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

// Get current path (relative to root, without domain), normalized to avoid duplicates
const currentPath = window.location.pathname
    .replace(/^\/+/, "")
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");

// Load and update session history
let jungleHistory = JSON.parse(sessionStorage.getItem(historyKey) || "[]");

// Avoid duplicating if user reloads same page
if (jungleHistory.length === 0 || jungleHistory[jungleHistory.length - 1] !== currentPath) {
    jungleHistory.push(currentPath);
    sessionStorage.setItem(historyKey, JSON.stringify(jungleHistory));
}

console.log("=== JUNGLE DEBUG ===");
console.log("Current path:", currentPath);
console.log("Jungle history:", jungleHistory);

// Find current index in history
const currentIndex = jungleHistory.lastIndexOf(currentPath);

console.log("Current index:", currentIndex);

// Determine previous and next paths
const previousPath = currentIndex > 0 ? jungleHistory[currentIndex - 1] : null;
const nextPath = currentIndex < jungleHistory.length - 1 ? jungleHistory[currentIndex + 1] : null;

console.log("Previous path:", previousPath);
console.log("Next path:", nextPath);

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