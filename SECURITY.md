# Security review of the source

VDesign was copied from `lemomo-ai/lemo-opuscar` at commit `3a7132b996be0241c1ea0ab180d519f06e6f10b6` on 2026-11-15. Before anything was copied, the checkout (3,840 files) was reviewed as untrusted data: nothing from it was executed, installed or imported.

## What was checked

| Check | Result |
|---|---|
| Executables, archives or scripts hidden in the tree (PE, ELF, Mach-O, ZIP signatures) | none |
| Images and fonts: file signatures match their extensions; no data appended after the end of a JPEG; no embedded scripts | all 955 pass |
| Symbolic links, submodules, git hooks | none |
| Hidden or bidirectional Unicode control characters in source | none |
| `eval`, `new Function`, `exec`, `pickle`, `os.system`, `shell=True` | 3 real uses, all reading the project's own files (a timeline expression, a subtitle table, a mix script); the rest are method names |
| Child processes | `ffmpeg`, `python3`, `cwebp`, `img2webp`, `memory_pressure`, called with argument lists, not shell strings; `core/render/slot.mjs` is a render-queue wrapper that runs the command you pass it |
| Reads of credentials (`~/.ssh`, cloud keys, browser data, keychains) | none |
| Environment variables | paths and render settings; `GITHUB_TOKEN` was read by the site builder to fetch a star count from api.github.com (that builder is not in VDesign); `DOUBAO_API_KEY` by one demo's optional voice script (that demo is not in VDesign) |
| Network destinations in code (274 hosts named across the tree) | GitHub, npm, Google Fonts, Hugging Face, Wikimedia, NASA, Library of Congress, Poly Haven and similar public sources of fonts and material; the rest are citations in fact sheets and credits. No telemetry, no uploads |
| `curl … \| sh`, `sudo`, scheduled tasks, startup entries, registry writes | none |
| Minified code | one file, `styles/spy-titles/demo/vendor/opentype.min.js`: byte-identical to opentype.js 1.3.4 from npm apart from one line ending |
| npm dependencies | `playwright-core` 1.63.0 and `three` 0.170.0, from registry.npmjs.org, with integrity hashes in `package-lock.json`; no install scripts in `package.json` |
| GitHub Actions | one Pages workflow with `contents: read`; not carried over |

No backdoor, malware or data collection was found.

## After the copy

The VDesign tree was scanned again with the same checks, and for any remaining Chinese, Japanese or Korean characters (none remain). The JavaScript and Python files whose comments were edited were syntax-checked.

## What you still trust when you use it

- **This repository.** The skill's installer keeps `~/vdesign` in step with the `main` branch here. Protect the branch.
- **npm and PyPI.** `setup.sh deps` installs the two npm packages above (pinned), a headless Chromium through Playwright, and the Python packages in `requirements*.txt` (not pinned to versions).
- **The original project's release assets.** `tools/fetch.sh` downloads the optional voice model, HDRIs and instrument libraries from the original repository's `assets` release and refuses any file whose SHA-256 differs from `tools/assets.json`.
- **Font and material hosts.** Some demo `build.sh` scripts fetch open-licence fonts or public-domain material when you rebuild a demo. An agent making your film reads demos; it does not need to run them.
- **Hugging Face**, for the Whisper model the voice check downloads on first use.

This review is a careful static read by an AI assistant, not a guarantee. Report a concern by opening an issue.
