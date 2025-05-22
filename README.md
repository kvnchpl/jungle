# JUNGLE

*A jungle away from the jungle.*

**JUNGLE** is a non-linear digital zine exploring reprieve, restoration, and exploration within the digital space. Each
"page" is its own node, branching and linking like paths in a living ecosystem. There is no start or end — only
wandering.

---

## Structure

| Folder/File   | Purpose                                                  |
|---------------|----------------------------------------------------------|
| `z/`          | Zine content — each page is a numbered HTML file         |
| `a/`          | Assets — includes subfolders for:                        |
| `a/a/`        | Audio                                                    |
| `a/f/`        | Fonts                                                    |
| `a/i/`        | Images                                                   |
| `a/m/`        | 3D models (and mesh assets)                              |
| `a/v/`        | Video                                                    |
| `jungle.js`   | Shared JS logic for page navigation and meta behavior    |
| `jungle.css`  | Shared styling across all pages                          |
| `index.html`  | Entry point for the zine (the portal)                    |

---

## Contributing

Each zine page is a separate file in `z/`, named sequentially (e.g. `00001.html`, `00002.html`, etc.).

To add a new node:

1. Copy an existing page like `00001.html`
2. Rename it to the next available number
3. Adjust the content and internal links
4. Include `<script src="jungle.js" type="module"></script>` to enable main script

Each page may also include its own `<meta>` tags for `title`, `description`, and `tags`.

---