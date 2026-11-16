# The Atelier

Eight signature styles written for VDesign, and one finish that any film can wear. This folder is for agents and for people choosing a style.

| | Style | Folder | Technique base (library styles to learn from) |
|---|---|---|---|
| I | Noir Atelier | [`noir-atelier`](noir-atelier/STYLE.md) | `glass-product`, `art-deco` |
| II | Haute Horlogerie | [`haute-horlogerie`](haute-horlogerie/STYLE.md) | `precise-mechanism`, `glass-product` |
| III | Marble & Brass | [`marble-and-brass`](marble-and-brass/STYLE.md) | `art-deco`, `blueprint` |
| IV | Couture Editorial | [`couture-editorial`](couture-editorial/STYLE.md) | `swiss-motion`, `spy-titles` |
| V | Champagne Hour | [`champagne-hour`](champagne-hour/STYLE.md) | `firefly-pointillism`, `glass-product` |
| VI | Silk & Shadow | [`silk-and-shadow`](silk-and-shadow/STYLE.md) | `glass-product`, `stained-glass` |
| VII | Gallery White | [`gallery-white`](gallery-white/STYLE.md) | `brick-toy`, `tilt-shift` |
| VIII | Midnight Concours | [`midnight-concours`](midnight-concours/STYLE.md) | `glass-product`, `hologram-hud` |

## For the agent

An Atelier style is used like a library style: its `STYLE.md` is fixed, and the story is the user's. Three things differ.

1. **There is no demo film yet.** Each `STYLE.md` names a technique base. After your treatment is written, read that library style's `DEMO.md` and `demo/` for the rendering technique only (the shader, the rig, the mix), as `AGENTS.md` describes. If the base is marked ◇ in `styles/README.md` it has no demo source here; use the other base named.
2. **The look is unproven until you render it.** Before any animation, render one style frame with the real drawing code and check it against sections 1 to 3 of the `STYLE.md`. Show that frame to the user and wait for a yes. This is the one extra stop an Atelier film has.
3. **Offer to keep the result.** When the film is delivered, offer to save the working style to `~/vdesign-my-styles/` (`MY-STYLES.md`), so the next film starts from code instead of from a description.

Tell the user plainly, when they pick one, that these styles are new and have no reference film.

## The VDesign finish

[`HOUSE-CODES.md`](HOUSE-CODES.md) is a layer, not a style. When the user asks for a film "with the VDesign finish" (or "more premium", "more luxurious"), keep the chosen style's `STYLE.md` and apply the house codes wherever the two do not conflict. Where they conflict, the `STYLE.md` wins and you say which code you set aside.
