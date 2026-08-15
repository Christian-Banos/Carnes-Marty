#!/usr/bin/env python3
"""
Sync the shared site chrome (utility bar, nav, mobile menu, "Visitanos"
section, footer, script tag) from index.html into the other 8 static HTML
pages. Each page keeps its own <head> (title/meta/OG/canonical) and its own
#page-content body untouched.

Run this after editing anything in index.html between </head> and
<div id="page-content"> (the header/nav/mobile menu), or between the closing
</div> of #page-content and </html> (Visitanos + footer + script tag).

Relies on two fixed structural anchors that must stay in index.html:
  - "</head>\n<body>\n" right before the body wrapper div
  - "<!-- VISÍTANOS -->" right after #page-content's closing </div>

Usage:
    python3 sync_chrome.py
"""

PROJECT = "."
SOURCE = "index.html"
TARGETS = [
    "pages/vacuno.html", "pages/pollo.html", "pages/cerdo.html", "pages/subproductos.html",
    "pages/recetas.html", "pages/recomendaciones.html", "pages/nosotros.html", "pages/contacto.html",
]

HEAD_SPLIT = "</head>\n<body>\n"
CONTENT_OPEN = '<div id="page-content">'
VISITANOS_MARKER = "<!-- VISÍTANOS -->"


def get_own_head_and_content(html):
    """Return (head_block, page_content_inner) for a single file — the two
    pieces that are unique per page and must survive a chrome sync."""
    head_end = html.index(HEAD_SPLIT) + len(HEAD_SPLIT)
    head = html[:head_end]
    body = html[head_end:]

    content_start = body.index(CONTENT_OPEN) + len(CONTENT_OPEN)
    visitanos_idx = body.index(VISITANOS_MARKER)
    content_close_idx = body.rindex("</div>", content_start, visitanos_idx)

    content = body[content_start:content_close_idx]
    return head, content


def get_shared_chrome(html):
    """Return (chrome_top, chrome_bottom) from index.html — the two pieces
    that are identical across all 9 pages and get copied everywhere."""
    body = html[html.index(HEAD_SPLIT) + len(HEAD_SPLIT):]
    content_start = body.index(CONTENT_OPEN) + len(CONTENT_OPEN)
    visitanos_idx = body.index(VISITANOS_MARKER)
    content_close_idx = body.rindex("</div>", content_start, visitanos_idx)

    chrome_top = body[:content_start]
    chrome_bottom = body[content_close_idx:]
    return chrome_top, chrome_bottom


def main():
    with open(f"{PROJECT}/{SOURCE}", "r", encoding="utf-8") as f:
        source_html = f.read()
    chrome_top, chrome_bottom = get_shared_chrome(source_html)

    changed = []
    for filename in TARGETS:
        path = f"{PROJECT}/{filename}"
        with open(path, "r", encoding="utf-8") as f:
            html = f.read()
        own_head, own_content = get_own_head_and_content(html)
        new_html = own_head + chrome_top + own_content + chrome_bottom
        if new_html != html:
            changed.append(filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_html)

    print("Synced chrome from index.html into:", ", ".join(TARGETS))
    print("Files actually changed:", ", ".join(changed) if changed else "(none, already in sync)")


if __name__ == "__main__":
    main()
