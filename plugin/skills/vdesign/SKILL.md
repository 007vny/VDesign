---
name: vdesign
description: Direct and produce a short film made entirely in code, in one of the styles of the VDesign library (for example Art Deco, Impasto Oil Painting, Watercolor Brush, Exploded Teardown) or one of its Atelier signature styles (Noir Atelier, Haute Horlogerie, Marble & Brass, Couture Editorial, Champagne Hour, Silk & Shadow, Gallery White, Midnight Concours). Use when the user asks for a video, film, short, promo, explainer or animation in a named style; when they want a film about their own topic and haven't chosen a style (help them choose); when they ask for "the VDesign finish"; or when they want to change a style into their own, make their own style from a blank page, or use a style they saved.
---

# VDesign

The styles, guides and tools live in the VDesign library (github.com/007vny/VDesign). This skill fetches it and hands you over to it.

1. **Get the library.** Run `sh "<skill base directory>/scripts/setup.sh"`. It clones or updates the library (default `~/vdesign`; a clone the user is standing in is used as it is), lists any missing system tools (Node, ffmpeg, Python) and prints `LIB=<path>` on its last line.
2. **Install the core tools early.** Start `sh "<skill base directory>/scripts/setup.sh" deps` right away, in the background if you can: it takes a few minutes the first time. Add `deps voice` or `deps music` later, only if the film needs them (`$LIB/TECHNIQUE.md` §1). Report missing system tools (Node, ffmpeg, Python) in your one round of questions; don't install system software yourself. A style marked ✦ also needs an image generator the user provides (`$LIB/AGENTS.md`, Workflow, Brief). Packages a style needs (its `STYLE.md` lists them) you install yourself, into the project folder.
3. **Follow the library.** Read `$LIB/AGENTS.md` and do what it says, starting with **Start** (the user's own styles in `~/vdesign-my-styles/`, then the ways in): finding the style or making their own, the one round of questions, the treatment, production and delivery. For an Atelier style or the VDesign finish, read `$LIB/atelier/README.md` as well.

What changes in skill mode:

| | |
|---|---|
| Project folder | `<name>/` in the folder the user started from (lowercase letters, digits, hyphens; avoid `#` and `?` in the path). Wherever the guides say `films/<name>/`, read this folder |
| Running tools | from `$LIB`, with the project's absolute path: `cd "$LIB" && node core/render/still.mjs "<project>" 1.5 3` |
| Library files in pages | absolute URLs: `/core/lib.js`, `/node_modules/three/…` (the project is served at `/@film/`) |
| Library files in scripts and `build.sh` | `$LIB/…`, with `LIB=<path>` at the top of `build.sh`; never `../..` |
| Demo source | not downloaded. `sh "<skill base directory>/scripts/setup.sh" demo <slug>`, only after your `TREATMENT.md` is written, to read its techniques; it is not meant to be rendered. Styles marked ◇ in `$LIB/styles/README.md` have no demo source: use the nearest style that has one |

Deliver what `$LIB/DIRECTOR.md` §11 lists, in the project folder, and tell the user where it is.

---
<sub>Adapted from [Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) by Lemomo (LemoLab), [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Changed for VDesign: renamed, Chinese-language content removed, Atelier collection added.</sub>
