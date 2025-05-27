import os
import re

Z_DIR = 'z'
LINK_RE = re.compile(r'href="z/(\d{5})')

edges = []

for fname in os.listdir(Z_DIR):
    if fname.endswith('.html'):
        src = fname
        with open(os.path.join(Z_DIR, fname)) as f:
            html = f.read()
            for match in LINK_RE.findall(html):
                target = f"{match}.html"
                edges.append((src, target))

with open('zine_graph.dot', 'w') as f:
    f.write('digraph Zine {\n')
    for src, tgt in edges:
        f.write(f'    "{src}" -> "{tgt}";\n')
    f.write('}\n')