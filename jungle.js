//giving up on the navigation arrows for now lol

/*
const historyKey = "jungleHistory";
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

// Get current path (relative to root, without domain), normalized to avoid duplicates
const currentPath = window.location.pathname
    .replace(/^\/+/, "")
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");

// Load history and index
let jungleHistory = JSON.parse(sessionStorage.getItem(historyKey) || "[]");
let currentIndex = parseInt(sessionStorage.getItem("jungleHistoryIndex") || "0", 10);

// Only add new path if it's different from the current index entry
if (jungleHistory[currentIndex] !== currentPath) {
    jungleHistory = jungleHistory.slice(0, currentIndex + 1);
    jungleHistory.push(currentPath);
    currentIndex = jungleHistory.length - 1;
    sessionStorage.setItem(historyKey, JSON.stringify(jungleHistory));
    sessionStorage.setItem("jungleHistoryIndex", currentIndex.toString());
}

console.log("=== JUNGLE DEBUG ===");
console.log("Current path:", currentPath);
console.log("Jungle history:", jungleHistory);
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
*/