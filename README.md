# JUNGLE

*A space away from space.*

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
| `fonts.css`   | Font face definitions                                    |
| `index.html`  | Entry point for the zine                                 |

---

## Contributing

Each zine page is a separate file in `z/`, named sequentially (e.g. `00001.html`, `00002.html`, etc.).

To add a new page:

1. Copy an existing page like `00001.html`
2. Rename it to the next available number
3. Adjust the content and internal links
4. Include `<script src="jungle.js" type="module"></script>` to enable main script (currently for applying background image/color)

---

## Visualizing Page Connections

To generate and update a graph of the connections between zine pages:

1. **Install Graphviz** (if not already installed):

    ```sh
    brew install graphviz
    ```

2. **Run the visualization script** to generate the graph data:

    ```sh
    python3 visualize_links.py
    ```

    This creates a `zine_graph.dot` file describing the page connections.

3. **Generate a PNG image of the graph**:

    ```sh
    dot -Tpng zine_graph.dot -o zine_graph.png
    ```

    The resulting `zine_graph.png` will show the structure and links between all pages.

> Re-run these steps whenever you add or change links between pages to keep the graph up to date.

---