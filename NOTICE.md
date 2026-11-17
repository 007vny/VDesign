# Notice

VDesign is adapted from **Lemo-Opuscar by Lemomo (LemoLab)**, https://github.com/lemomo-ai/lemo-opuscar, version 2.0.0 (commit `3a7132b996be0241c1ea0ab180d519f06e6f10b6`).

- Docs (every Markdown file, the image-generation prompts): Creative Commons Attribution-NonCommercial 4.0 International, https://creativecommons.org/licenses/by-nc/4.0/
- Posters and stills: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/
- Code: MIT License, Copyright (c) 2026 Lemomo (LemoLab)
- Two styles were contributed to the original library by others: "Memphis Diorama by EianLu, in Lemo-Opuscar by Lemomo (LemoLab)" and "Crayon World 3D by 2nd1st, in Lemo-Opuscar by Lemomo (LemoLab)".
- Third-party material (fonts, models, textures, data, footage, photographs) keeps its own licence. Each demo's `CREDITS` and `REUSE.toml` name it.

This is not the official repository and is not endorsed by Lemomo (LemoLab).

## What was changed

**Renamed.** The library, the skill and its folders are called VDesign here (`~/vdesign`, `~/vdesign-my-styles`, the `vdesign` skill). The installer fetches this repository instead of the original.

**Removed.**

- All Chinese-language content: the Chinese README, Chinese names and descriptions in every `style.json`, Chinese text in the guides and style prompts, the Chinese text-to-speech tool (`core/tts/tts_zh.py`), and the Chinese number handling in `core/tts/asr_check.py`, which is now an English word-by-word check.
- The demo source, `DEMO.md` and subtitles of every style whose demo film has Chinese on screen or in its narration (68 styles, marked ◇ in `styles/README.md`). Their `STYLE.md`, `style.json` and `CREDITS` are kept.
- Posters that show Chinese lettering. Posters are kept for 44 styles.
- The Mascot Screencast style (`styles/living-screencast/`), because it draws Anthropic's Clawd character and the Claude app interface, which the original licence excludes from reuse. The two licence texts that covered only that material went with it.
- The gallery site generator (`styleboard/`), the README artwork (`docs/`), the release and publishing tools (`tools/` other than `fetch.sh` and `assets.json`), `MAINTAINING.md`, the issue templates and the Pages workflow. They belong to the original project's own site and releases.

**Edited.** In the files that remain, Chinese words were removed from sentences, comments and tables, and the sentences tidied. Every edited Markdown file says so in its footer. No drawing, rendering or audio code was changed apart from comments, with these exceptions: `core/audio/sampler.py` (Chinese aliases for instrument families removed), `core/tts/tts.py` (a character range written with escapes), `core/tts/asr_check.py` (as above), and the installer.

**Reworded.** In the style prompts, sentences that set a Chinese line above an English one now speak of a main-language line and an optional second line. Reading-time rules use the Latin rate only, Chinese font examples are replaced with Latin ones (for example Noto Sans for Noto Sans SC), and the passages on drawing Chinese characters by hand in Circuit Board, Neon Tubes, 1-bit Dither and Pen Plotter are removed. Credits for Chinese fonts that no longer appear in anything kept here are removed from the `CREDITS` files.

**Added.** `README.md`, `NOTICE.md`, `SECURITY.md`, the `atelier/` collection, `docs/index.html`, a style plate for every library style and Atelier style in `docs/plates/` with the code that draws them in `tools/plates/`, and the skill and plugin texts. `styles/README.md` and the style list in `AGENTS.md` were regenerated in English.

## What still comes from the original project

`tools/fetch.sh` downloads the optional large asset packs (the offline English voice model, HDRIs, instrument sample libraries) from the original repository's `assets` release. Each pack is checked against the SHA-256 in `tools/assets.json` before it is unpacked. The original demo films are not copied here; they play in the original gallery, https://lemomo-ai.github.io/lemo-opuscar/.
