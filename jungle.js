const contentEl = document.getElementById("jungle-content");
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");
const historyKey = "jungleHistory";

let structure = {};
let jungleHistory = JSON.parse(sessionStorage.getItem(historyKey) || "[]");

async function loadStructure() {
    structure = await getStructure();
}

async function renderPage(slug) {
    const page = await getPage(slug);

    document.title = page.title;
    contentEl.innerHTML = `
    <h1>${page.title}</h1>
    <p>${page.body}</p>
  `;

    // Update session history
    const last = jungleHistory[jungleHistory.length - 1];
    if (last !== slug) {
        jungleHistory.push(slug);
        sessionStorage.setItem(historyKey, JSON.stringify(jungleHistory));
    }

    // Handle nav arrows
    const index = jungleHistory.lastIndexOf(slug);
    if (index > 0) {
        backArrow.href = `#${jungleHistory[index - 1]}`;
        backArrow.style.display = "inline";
    } else {
        backArrow.style.display = "none";
    }

    if (index < jungleHistory.length - 1) {
        forwardArrow.href = `#${jungleHistory[index + 1]}`;
        forwardArrow.style.display = "inline";
    } else {
        forwardArrow.style.display = "none";
    }
}

// Router
function handleHashChange() {
    const slug = location.hash.replace(/^#/, "") || "welcome";
    renderPage(slug);
}

// Init
window.addEventListener("hashchange", handleHashChange);
loadStructure().then(() => handleHashChange());

// Helpers
async function getPage(slug) {
  const res = await fetch(`z/${slug}.json`);
  return res.json();
}

async function getStructure() {
  const res = await fetch("d/structure.json");
  return res.json();
}