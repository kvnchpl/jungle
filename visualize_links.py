import os
import re
from collections import defaultdict

Z_DIR = 'z'
LINK_RE = re.compile(r'href="z/(\d{5})')
INDEX_FILE = 'index.html'

edges = []
nodes = set()

in_degree = defaultdict(int)
out_degree = defaultdict(int)

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
                out_degree[src] += 1
                in_degree[target] += 1

# Also process index.html
if os.path.exists(INDEX_FILE):
    nodes.add(INDEX_FILE)
    with open(INDEX_FILE) as f:
        html = f.read()
        for match in LINK_RE.findall(html):
            target = f"{match}.html"
            edges.append((INDEX_FILE, target))
            out_degree[INDEX_FILE] += 1
            in_degree[target] += 1

# Add targets as nodes
for _, tgt in edges:
    nodes.add(tgt)

with open('zine_graph.dot', 'w') as f:
    f.write('digraph Zine {\n')
    def label(name):
        return name.replace('.html', '')
    for node in sorted(nodes):
        lbl = label(node)
        in_d = in_degree[node]
        out_d = out_degree[node]

        if in_d == 0 and out_d == 0:
            attrs = 'color="gray", style="filled", fillcolor="lightgray"'
        elif in_d == 0:
            attrs = 'color="red", style="filled", fillcolor="mistyrose"'
        elif out_d == 0:
            attrs = 'color="blue", style="filled", fillcolor="lightblue"'
        else:
            attrs = ''
        f.write(f'    "{lbl}" [{attrs}];\n')

    for src, tgt in edges:
        f.write(f'    "{label(src)}" -> "{label(tgt)}";\n')
    f.write('}\n')