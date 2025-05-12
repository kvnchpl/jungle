# JUNGLE

*A jungle away from the jungle.*

**JUNGLE** is a non-linear digital zine exploring reprieve, restoration, and exploration within the digital space. Each
"page" is its own node, branching and linking like paths in a living ecosystem. There is no start or end — only
wandering.

---

## Structure

| Folder       | Purpose                                  |
|--------------|------------------------------------------|
| `z/`         | Zine content — individual HTML pages     |
| `a/`         | Assets — audio, images, video, 3D models |
| `d/`         | Data — metadata, structure, tags         |
| `jungle.js`  | Shared JS logic for navigation           |
| `jungle.css` | Shared styling across all pages          |
| `index.html` | Entry point for the zine (the portal)    |

---

## Contributing

Each zine page is a separate file in `z/`. To add a new node:

1. Copy an existing page like `1.html`
2. Rename it to something meaningful (e.g. `roots.html`)
3. Adjust the content and links
4. Include `
<script src="/jungle.js" type="module"></script>` to enable forward/back nav

Optionally update `d/structure.json` if using tags or relationships later.

---