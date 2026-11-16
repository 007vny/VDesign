# VDesign: instructions for agents

This repository is a library of film styles. Each style has a `styles/<slug>/STYLE.md` (what the style is) and one demo film made entirely in code (`DEMO.md` and `demo/`). People pick a style and ask for a film about **their own** topic. Your job is to direct and produce that film.

| The request | Go to |
|---|---|
| Any request: first see the user's own styles; no request yet: offer the ways in | **Start** below |
| A film about the user's topic (the normal case) | **Style and story**, **Workflow** below |
| "Which styles are there?" / no style chosen | **Finding the style** below |
| Directing: story, sound, rhythm, camera, maps, checks, delivery | [`DIRECTOR.md`](DIRECTOR.md) |
| Building: install, pages, voice, music, mix | [`TECHNIQUE.md`](TECHNIQUE.md) |
| Tool commands and flags | [`core/README.md`](core/README.md) |
| The user wants to change a style and keep it as their own, or make their own style from a blank page, or names a style in `~/vdesign-my-styles/` | [`MY-STYLES.md`](MY-STYLES.md) |
| A film in one of the Atelier signature styles, or "with the VDesign finish" | [`atelier/README.md`](atelier/README.md) |

**Films outside `styles/` are the user's: no VDesign credit, no watermark.**

## Start

- **Their own styles first.** If `~/vdesign-my-styles/README.md` exists, read it: it lists every style the user has saved, wherever it's kept, and their own styles ([`MY-STYLES.md`](MY-STYLES.md)) count like library styles. When they name a style, look there first, then in the library.
- **Their language.** Talk to them in the language they write in, and use it as the film's default language.
- **No request yet** (they only started the skill, or said hello): offer the ways in with one question, using the `AskUserQuestion` tool, in their language, with the first as the recommended one:
  1. a film in a library style (**Finding the style**);
  2. change a library style and keep it as their own ([`MY-STYLES.md`](MY-STYLES.md));
  3. make their own style from a blank page ([`MY-STYLES.md`](MY-STYLES.md));
  4. a film in one of their own styles, only when they have some (name them).

  When their request already says which, skip the question.

## Style and story

- **`STYLE.md` is fixed**: the style's invariants (look, colour, type, motion, camera grammar, sound palette, native moves, pitfalls). Keep all of it.
- **Everything else is yours to direct** from the user's topic: story, structure, characters, settings, shots, timings, references, how data is charted. Never bend the topic toward the demo. The language on screen is the film's too (DIRECTOR.md §1).
- **Treatment first, demo later.** Write your own `TREATMENT.md`, with three candidate structures and your choice (DIRECTOR.md §4), before you open `DEMO.md` or the demo code. Then use the demo only to learn techniques (a brush engine, a rig, a shader, a mix), never its story, arc, shots, props or timeline. One exception: a style cut from real material (Edit & Documentary) needs its material before the treatment, so the tools its `STYLE.md` names in `demo/tools/` for finding and logging material (`footage.py` and the like) may be used first, copied into the project folder and run there; still read `DEMO.md` and the rest of the demo only after the treatment is written.
- **Scene styles** (a set-up guide, a spec walkthrough, a museum plate, a trail guide) list use cases in their `STYLE.md`. Read them as grammar for the order in which information arrives and how long each part needs on screen, then build the user's content in your own structure. Swapping text into a demo's `content.json` is only a technical check, never the way to deliver.
- Never build inside `styles/`: copy what you need into the film's project folder.

## Finding the style

Users name a style by its name ("Impasto Oil Painting") or by its folder (`impasto`). Look it up in [`styles/README.md`](styles/README.md). If nothing matches clearly, show the closest two or three and ask.

If the user hasn't picked a style:
- Suggest two or three that fit their topic.
- If they have their own styles, list those first, under "My styles" (in their language).
- Show them the full list below in the chat. Don't drop, merge or rename anything.
- Link the gallery, the collection: https://github.com/007vny/VDesign#the-collection (the original demo films play in the upstream gallery, https://lemomo-ai.github.io/lemo-opuscar/)
- Then ask them to type the name. The list goes in your own message (a command's output isn't shown to them), and the question is plain text, not `AskUserQuestion`: its few options would hide the rest of the list.

<!-- style-list:start -->
All 98 library styles:

- **Edit & Documentary** (8): Caption News ◇, 1920s Newsreel ◇, Live Countdown Split-screen ◇, City Symphony ◇, Visual Investigation ◇, Constructivist Montage ◇, Sports Telestrator ◇, Broadcast News Package ◇
- **Painting & Illustration** (5): Crayon Picture Book, Watercolor Brush ◇, Impasto Oil Painting, Urban Sketch · Pen & Wash, Colored-Pencil Science Illustration ◇
- **Sketch & Board** (7): One-line Drawing, Whiteboard Explainer, Chalkboard ◇, Sketchnote ◇, Stick-figure Explainer ◇, Tablet Sketch Explainer ◇, Marker on Paper ◇
- **Traditional Crafts** (7): Chinese Ink Wash ◇, Shadow Puppetry ◇, Ukiyo-e ◇, Red Paper-cut ◇, Paper-cut Lightbox ◇, Stained Glass, Gilded Illumination ◇
- **Print & Printmaking** (8): Risograph Print, Halftone Dossier ◇, Woodcut Print, Copperplate Engraving, Silkscreen Travel Poster ◇, Scratchboard Long Take ◇, Pop Art ◇, Vintage Engraving Collage ◇
- **Graphic & Type** (8): Swiss Motion Graphics, 60s Spy Title Sequence, Art Deco, Pictogram Motion ◇, Bauhaus Shapes ◇, Scale Zoom Explainer ◇, Text Flash Cuts ✦ ◇, Silhouette Rhythm ◇
- **Line Diagrams** (8): Blueprint, Isometric Infographic, Exploded Teardown ◇, Line-Art Cutaway ◇, Color-Coded Mechanism ◇, Instruction Manual Art ◇, Pen Plotter ◇, Assembly-Line Diagram ◇
- **Cartoons** (6): 1930s Rubber Hose Cartoon, 80s Cel Anime ◇, Sci-Fi Sitcom Toon, Mid-century Cartoon, Comic History Cartoon ✦ ◇, Manga Panels ✦ ◇
- **Games** (4): 16-bit Pixel RPG, 2.5D Pixel Art, Microgame Frenzy, Rhythm Game Show ◇
- **Film & Tape** (5): CRT ASCII Terminal, 1920s Silent Film, Liminal Found Footage, Scratch Film ◇, Double Exposure ◇
- **Screens & Interfaces** (5): Dark Tech Keynote, Sci-fi Hologram HUD, Tabletop App Flythrough ◇, Spreadsheet Film ◇, 1-bit Dither ◇
- **Light & Lines** (5): Circuit Board ◇, Firefly Pointillism ◇, Flow-field Wind Lines ◇, Oscilloscope Math ◇, Neon Tubes ◇
- **3D & Miniature** (8): Brick Toy, Paper Pop-up Book ◇, Tilt-Shift Miniature, Low-poly Isometric Island, Glass Product Render, Memphis Diorama ◇, Isometric People Scene ◇, Crayon World 3D ◇
- **Instruments & Evidence** (8): Satellite Briefing ◇, Engineering Briefing Board ◇, LiDAR Survey ◇, Under the Microscope ◇, Archive Light Table ◇, Security X-ray ◇, Radar Sweep Documentary ◇, Thermal Camera ◇
- **Data & Maps** (6): Data Storytelling, Projection-Mapped Model ◇, Data Physicalization ◇, Transit Map ◇, 3D Map Explainer ◇, Blob Simulation ◇

✦ draws with an image generator: the user's Codex CLI, or another image tool they have. Without one the film cannot start (core/README.md, "Image generation"). Say so when you suggest the style.
◇ ships as a style prompt only (no `demo/` folder): `STYLE.md` is the whole brief. Learn the technique from the nearest style in the same category that has a demo.
<!-- style-list:end -->

## Workflow

1. **Brief.** Make sure the style and the topic are clear, then ask the user once, in a single message (DIRECTOR.md §1):
   - anything about the topic you can't decide yourself (facts; names, logos or products that must appear);
   - whether they have material of their own: a voice recording or a preferred voice, music, photos, logos, fonts, and for a style built from real material, their own data or scans;
   - the film's language, if it isn't obvious (default: the language they write in or chose, for voice and subtitles);
   - whether they want to review a storyboard first (default: no);
   - anything missing on their machine: before you ask, run `sh plugin/skills/vdesign/scripts/setup.sh` from the library root (no arguments: it takes seconds and lists every missing system tool at once) and include what it reports. Start `… setup.sh deps` (core only) in the background, if it isn't already running: it takes a few minutes the first time. Add the voice and music tiers later, only if the film needs them (TECHNIQUE.md §1);
   - for a style marked ✦, how they will make the images, but only when the image check below fails.

   **A style marked ✦ draws with an image generator** (its `style.json` says `"needs": ["image-generation"]`). Run `python3 core/image/gen_image.py --check` from the library root before you write the questions, next to `setup.sh`. If it fails, put its reason and the question in the same message: what will they make the images with instead (another image API or app, or their own drawings; you give them the prompts and the file names)? With no image generator at all, tell them plainly that a film in this style can't start, and offer two or three other styles that fit their topic. Never draw the characters in code as a stand-in.

   Skip what their request already answers. Wait for the reply, fill every other gap with a sensible default, sum up the brief in a few lines and start. Don't come back with more questions.
2. **Treatment.** Write `TREATMENT.md` in the project folder (DIRECTOR.md §4), before you open the demo (an Edit & Documentary style gathers its material first: **Treatment first** above).
3. **Look.** Render style frames or a model sheet with the real drawing code and check them against `STYLE.md` (DIRECTOR.md §5).
4. **Storyboard, only if the user asked for it** (DIRECTOR.md §5). **Stop and wait for approval.** Otherwise don't stop.
5. **Produce.** Voice → check → score (can run in parallel) → animation → mix → render (TECHNIQUE.md).
6. **Self-check and deliver** (DIRECTOR.md §11).

Report progress in the user's language. If a step fails, read the error, fix the cause and retry; go back to the user only for a decision or something only they can provide.

## Where things go

- The film's project folder is `films/<name>/` in a clone (ignored by git), or `<name>/` in the user's folder in skill mode (see the skill's `SKILL.md`). Wherever a guide says `films/<name>/`, read "the project folder". Work only there, unless the user asks you to work in their own project.
- Run `node core/…` and `sh tools/…` from the library root (`$LIB` in skill mode).
- `core/` has ready-made tools (rendering, TTS, speech check, sampler, sfx, mux). Use them or your own stack, but don't edit `core/` or `styles/` for a user's film.
- Never kill processes you didn't start. Don't leave background processes running.

---
<sub>Adapted from [Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) by Lemomo (LemoLab), [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Changed for VDesign: renamed, non-English text and tools removed, the original site and release tooling removed, Atelier collection added.</sub>
