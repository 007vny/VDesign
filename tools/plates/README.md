# Style plates

One 1920×1080 picture per library style, drawn in code on a single canvas. They are illustrations of each style's look for the README and the gallery, not frames from a film, and they were not made with an image generator.

| File | What it holds |
|---|---|
| `index.html` | the page: the list of styles, and `window.render(i)` for style number `i` |
| `lib.js` | shared helpers: seeded random numbers, noise, paper grain, type, isometric boxes |
| `p1.js` to `p4.js` | one drawing function per style, `P['<slug>']` |

Render them with the library's still tool, from the library root, after `sh plugin/skills/vdesign/scripts/setup.sh deps`:

```sh
node core/render/still.mjs tools/plates --range 0:97:1 --prefix p_ --out /tmp/plates
```

Plate `i` is the style at position `i` of `STYLES` in `index.html`. The copies in `docs/plates/` are those frames resized to 1280×720 and named by style folder.

The plates use fonts installed on the machine that renders them (Segoe, Georgia, Consolas, Impact and similar on Windows), so a render on another system will differ in its lettering.

Code: MIT. Pictures in `docs/plates/`: CC BY 4.0.
