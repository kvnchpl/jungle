import os
import re

Z_DIR = 'z'
LINK_RE = re.compile(r'href="z/(\d{5})')

edges = []
nodes = set()

# Collect all HTML files in z/
for fname in os.listdir(Z_DIR):
    if fname.endswith('.html'):
        nodes.add(fname)
        src = fname
        with open(os.path.join(Z_DIR, fname)) as f:
            html = f.read()
            for match in LINK_RE.findall(html):
                target = f"{match}.html"
                edges.append((src, target))

# Also process index.html in the root directory
INDEX_FILE = 'index.html'
if os.path.exists(INDEX_FILE):
    nodes.add(INDEX_FILE)
    with open(INDEX_FILE) as f:
        html = f.read()
        for match in LINK_RE.findall(html):
            target = f"{match}.html"
            edges.append((INDEX_FILE, target))

# Add targets as nodes (in case they're not sources)
for _, tgt in edges:
    nodes.add(tgt)

with open('zine_graph.dot', 'w') as f:
    f.write('digraph Zine {\n')
    def label(name):
        return name.replace('.html', '')
    for node in sorted(nodes):
        f.write(f'    "{label(node)}";\n')
    for src, tgt in edges:
        f.write(f'    "{label(src)}" -> "{label(tgt)}";\n')
    f.write('}\n')