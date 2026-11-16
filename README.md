<div align="center">

# V D E S I G N

**A house of film styles for your coding agent.**

*Choose a style, bring your story, and the agent directs, draws, scores and mixes the film, entirely in code.*

[The Collection](#the-collection) · [The Atelier](#the-atelier) · [Install](#install) · [Provenance](#provenance-and-licence)

</div>

---

## The idea

A film style is a discipline: what the picture is made of, how colour is rationed, how the camera is allowed to move, what the room sounds like. VDesign keeps 98 of those disciplines as written prompts an agent can follow, on a shared toolkit that renders every frame from code. There is no video generator and no stock footage in the pipeline. Canvas and WebGL pages are rendered frame by frame, the score is composed from free sample libraries, and the narration is text-to-speech.

VDesign adds two things of its own on top of that library:

- **The Atelier**: eight signature styles written for luxury work, such as watchmaking, couture, hospitality, automotive and fine objects.
- **The VDesign finish**: a set of house codes (restraint in colour, slower hands, quieter sound, more air) that can be laid over any style in the collection.

## How it works

1. **Choose.** Browse [the collection](#the-collection) or [the Atelier](#the-atelier).
2. **Ask.** One sentence is enough:

```text
Make a 40-second film in the Haute Horlogerie style about my grandfather's workshop.
```

```text
Make a film in the Art Deco style about our hotel's opening night, with the VDesign finish.
```

3. **Receive.** The agent asks its questions once, writes a treatment, renders a style frame, then produces the film: picture, voice, score, mix, subtitles.

A film takes an agent roughly 30 to 60 minutes. Default output is 1920×1080 at 24 fps; vertical and other sizes on request.

## Install

**As a Claude Code plugin:**

```sh
claude plugin marketplace add 007vny/VDesign
```

```sh
claude plugin install vdesign@vdesign
```

On first use the skill clones this library to `~/vdesign`, shared by all your films. Each film's project lives in the folder you started from.

**Or clone and work inside it** (films go to `films/<name>/`):

```sh
git clone https://github.com/007vny/VDesign.git
```

**You need** Node 20+, ffmpeg 7+ and Python 3.11+ (or [uv](https://docs.astral.sh/uv/)). The agent installs the rest. Styles marked ✦ also need an image generator you bring.

## The Atelier

Eight signature styles, written for VDesign. Each is a complete style prompt in [`atelier/`](atelier/README.md) and names the library style whose technique it builds on.

| | Style | In one line | Suits |
|---|---|---|---|
| I | [Noir Atelier](atelier/noir-atelier/STYLE.md) | Black lacquer, one shaft of light, a single gold thread | Maison films, fragrance, private launches |
| II | [Haute Horlogerie](atelier/haute-horlogerie/STYLE.md) | Inside a movement: brushed steel, ruby jewels, a balance wheel that keeps the edit | Watchmaking, precision engineering, heritage |
| III | [Marble & Brass](atelier/marble-and-brass/STYLE.md) | Veined stone slabs and brass inlay that draws itself | Architecture, hospitality, property |
| IV | [Couture Editorial](atelier/couture-editorial/STYLE.md) | A fashion monthly in motion: Didone type, white space, one photograph at a time | Fashion, beauty, lookbooks, invitations |
| V | [Champagne Hour](atelier/champagne-hour/STYLE.md) | Golden-hour haze, soft bokeh, a rising bead of bubbles | Celebrations, weddings, wine and spirits |
| VI | [Silk & Shadow](atelier/silk-and-shadow/STYLE.md) | Draped cloth under raking light, in three jewel tones | Textiles, jewellery, fragrance, title sequences |
| VII | [Gallery White](atelier/gallery-white/STYLE.md) | The museum vitrine: plinths, wall labels, skylight | Collections, craft, product archives |
| VIII | [Midnight Concours](atelier/midnight-concours/STYLE.md) | A dark studio and light strips sliding over coachwork | Automotive, industrial design, hardware |

These are style prompts awaiting their first films: none has a rendered demo yet. The first film you make in one sets its look, and you can keep the result as your own style ([`MY-STYLES.md`](MY-STYLES.md)).

**The VDesign finish.** [`atelier/HOUSE-CODES.md`](atelier/HOUSE-CODES.md) is a short set of rules any film can wear. Add *"with the VDesign finish"* to a request.

## The Collection

98 styles in 15 categories, sorted by what the picture looks like. Every style has a complete `STYLE.md`. 30 also carry the source of a demo film, for the agent to study technique from. A browsable version is in [`docs/index.html`](docs/index.html).

✦ draws with an image generator you bring · ◇ style prompt only, no demo source here

**01 · Edit & Documentary**  
[Caption News](styles/caption-news/STYLE.md) ◇ · [1920s Newsreel](styles/newsreel/STYLE.md) ◇ · [Live Countdown Split-screen](styles/countdown/STYLE.md) ◇ · [City Symphony](styles/city-symphony/STYLE.md) ◇ · [Visual Investigation](styles/visual-investigation/STYLE.md) ◇ · [Constructivist Montage](styles/kino-montage/STYLE.md) ◇ · [Sports Telestrator](styles/telestrator/STYLE.md) ◇ · [Broadcast News Package](styles/news-package/STYLE.md) ◇

**02 · Painting & Illustration**  
[Crayon Picture Book](styles/crayon-book/STYLE.md) · [Watercolor Brush](styles/watercolor/STYLE.md) ◇ · [Impasto Oil Painting](styles/impasto/STYLE.md) · [Urban Sketch · Pen & Wash](styles/urban-sketch/STYLE.md) · [Colored-Pencil Science Illustration](styles/colored-pencil/STYLE.md) ◇

**03 · Sketch & Board**  
[One-line Drawing](styles/one-line/STYLE.md) · [Whiteboard Explainer](styles/whiteboard/STYLE.md) · [Chalkboard](styles/chalkboard/STYLE.md) ◇ · [Sketchnote](styles/sketchnote/STYLE.md) ◇ · [Stick-figure Explainer](styles/stick-explainer/STYLE.md) ◇ · [Tablet Sketch Explainer](styles/ipad-sketch/STYLE.md) ◇ · [Marker on Paper](styles/marker-paper/STYLE.md) ◇

**04 · Traditional Crafts**  
[Chinese Ink Wash](styles/ink-wash/STYLE.md) ◇ · [Shadow Puppetry](styles/shadow-puppet/STYLE.md) ◇ · [Ukiyo-e](styles/ukiyoe/STYLE.md) ◇ · [Red Paper-cut](styles/papercut-red/STYLE.md) ◇ · [Paper-cut Lightbox](styles/paper-lantern/STYLE.md) ◇ · [Stained Glass](styles/stained-glass/STYLE.md) · [Gilded Illumination](styles/gilded-illumination/STYLE.md) ◇

**05 · Print & Printmaking**  
[Risograph Print](styles/risograph/STYLE.md) · [Halftone Dossier](styles/halftone-dossier/STYLE.md) ◇ · [Woodcut Print](styles/woodcut/STYLE.md) · [Copperplate Engraving](styles/engraving/STYLE.md) · [Silkscreen Travel Poster](styles/silkscreen-poster/STYLE.md) ◇ · [Scratchboard Long Take](styles/printed-long-take/STYLE.md) ◇ · [Pop Art](styles/pop-art/STYLE.md) ◇ · [Vintage Engraving Collage](styles/vintage-collage/STYLE.md) ◇

**06 · Graphic & Type**  
[Swiss Motion Graphics](styles/swiss-motion/STYLE.md) · [60s Spy Title Sequence](styles/spy-titles/STYLE.md) · [Art Deco](styles/art-deco/STYLE.md) · [Pictogram Motion](styles/pictogram-motion/STYLE.md) ◇ · [Bauhaus Shapes](styles/bauhaus-shapes/STYLE.md) ◇ · [Scale Zoom Explainer](styles/flat-space-explainer/STYLE.md) ◇ · [Text Flash Cuts](styles/text-flash-cuts/STYLE.md) ✦ ◇ · [Silhouette Rhythm](styles/silhouette-rhythm/STYLE.md) ◇

**07 · Line Diagrams**  
[Blueprint](styles/blueprint/STYLE.md) · [Isometric Infographic](styles/iso-infographic/STYLE.md) · [Exploded Teardown](styles/teardown/STYLE.md) ◇ · [Line-Art Cutaway](styles/hardcore-info/STYLE.md) ◇ · [Color-Coded Mechanism](styles/precise-mechanism/STYLE.md) ◇ · [Instruction Manual Art](styles/instruction-manual/STYLE.md) ◇ · [Pen Plotter](styles/pen-plotter/STYLE.md) ◇ · [Assembly-Line Diagram](styles/assembly-line-diagram/STYLE.md) ◇

**08 · Cartoons**  
[1930s Rubber Hose Cartoon](styles/rubber-hose/STYLE.md) · [80s Cel Anime](styles/cel-anime-80s/STYLE.md) ◇ · [Sci-Fi Sitcom Toon](styles/scifi-toon/STYLE.md) · [Mid-century Cartoon](styles/midcentury-toon/STYLE.md) · [Comic History Cartoon](styles/comic-history/STYLE.md) ✦ ◇ · [Manga Panels](styles/manga-panels/STYLE.md) ✦ ◇

**09 · Games**  
[16-bit Pixel RPG](styles/pixel-rpg/STYLE.md) · [2.5D Pixel Art](styles/hd-2d/STYLE.md) · [Microgame Frenzy](styles/microgame/STYLE.md) · [Rhythm Game Show](styles/game-show/STYLE.md) ◇

**10 · Film & Tape**  
[CRT ASCII Terminal](styles/ascii-crt/STYLE.md) · [1920s Silent Film](styles/silent-film/STYLE.md) · [Liminal Found Footage](styles/backrooms/STYLE.md) · [Scratch Film](styles/scratch-film/STYLE.md) ◇ · [Double Exposure](styles/double-exposure/STYLE.md) ◇

**11 · Screens & Interfaces**  
[Dark Tech Keynote](styles/dark-keynote/STYLE.md) · [Sci-fi Hologram HUD](styles/hologram-hud/STYLE.md) · [Tabletop App Flythrough](styles/desktop-flythrough/STYLE.md) ◇ · [Spreadsheet Film](styles/spreadsheet/STYLE.md) ◇ · [1-bit Dither](styles/one-bit-dither/STYLE.md) ◇

**12 · Light & Lines**  
[Circuit Board](styles/circuit-board/STYLE.md) ◇ · [Firefly Pointillism](styles/firefly-pointillism/STYLE.md) ◇ · [Flow-field Wind Lines](styles/flow-field/STYLE.md) ◇ · [Oscilloscope Math](styles/oscilloscope-math/STYLE.md) ◇ · [Neon Tubes](styles/neon-tubes/STYLE.md) ◇

**13 · 3D & Miniature**  
[Brick Toy](styles/brick-toy/STYLE.md) · [Paper Pop-up Book](styles/paper-popup/STYLE.md) ◇ · [Tilt-Shift Miniature](styles/tilt-shift/STYLE.md) · [Low-poly Isometric Island](styles/lowpoly-island/STYLE.md) · [Glass Product Render](styles/glass-product/STYLE.md) · [Memphis Diorama](styles/memphis-diorama/STYLE.md) ◇ · [Isometric People Scene](styles/isometric-picture-book/STYLE.md) ◇ · [Crayon World 3D](styles/crayon-world/STYLE.md) ◇

**14 · Instruments & Evidence**  
[Satellite Briefing](styles/satellite-briefing/STYLE.md) ◇ · [Engineering Briefing Board](styles/briefing-board/STYLE.md) ◇ · [LiDAR Survey](styles/lidar-survey/STYLE.md) ◇ · [Under the Microscope](styles/microscope/STYLE.md) ◇ · [Archive Light Table](styles/archive-lighttable/STYLE.md) ◇ · [Security X-ray](styles/security-xray/STYLE.md) ◇ · [Radar Sweep Documentary](styles/dark-documentary/STYLE.md) ◇ · [Thermal Camera](styles/thermal-camera/STYLE.md) ◇

**15 · Data & Maps**  
[Data Storytelling](styles/dataviz/STYLE.md) · [Projection-Mapped Model](styles/white-model/STYLE.md) ◇ · [Data Physicalization](styles/data-physical/STYLE.md) ◇ · [Transit Map](styles/transit-map/STYLE.md) ◇ · [3D Map Explainer](styles/map-explainer/STYLE.md) ◇ · [Blob Simulation](styles/pip-simulation/STYLE.md) ◇

The full index, with each style's folder, is [`styles/README.md`](styles/README.md).

## What the agent reads

| File | What it gives the agent |
|---|---|
| [`AGENTS.md`](AGENTS.md) | where to start, the workflow, the list of styles |
| [`DIRECTOR.md`](DIRECTOR.md) | how to direct: story, sound, rhythm, camera, self-checks |
| [`TECHNIQUE.md`](TECHNIQUE.md) | how to build: frame-by-frame rendering, voice, music, mixing |
| `styles/<style>/STYLE.md` | what a style looks and sounds like; the story is yours |
| [`atelier/`](atelier/README.md) | the signature styles and the VDesign finish |
| [`MY-STYLES.md`](MY-STYLES.md) | changing a style and keeping it as your own |

## Provenance and licence

VDesign is an adaptation of **[Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) by Lemomo (LemoLab)**, version 2.0.0. The library's styles, guides and toolkit are their work; the Atelier, the house codes, this README and the gallery page are new.

- **Code** (`core/`, demo sources, tools): MIT.
- **Docs** (every Markdown file, including each `STYLE.md`): [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Non-commercial sharing only; upstream offers a commercial licence for the docs.
- **Posters and stills**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- **Third-party material** keeps its own licence; each demo's `CREDITS` names it.
- **Films you make** with the library are yours, commercial films included.

[`LICENSE`](LICENSE) has the full terms, [`NOTICE.md`](NOTICE.md) lists exactly what was changed, and [`SECURITY.md`](SECURITY.md) records the audit the source went through before it was copied here.
