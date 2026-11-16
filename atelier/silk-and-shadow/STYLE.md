# Silk & Shadow — Style Prompt

> Cloth is the screen, the curtain and the landscape. Heavy silk in deep jewel tones, falling in slow folds under one raking light, parting to show what the film is about.
> References (grammar only): drapery in Baroque painting; satin in studio fashion photography; a theatre curtain an instant before it opens. Never copy a fashion house's campaign, pattern or monogram.

Technique base: `glass-product` (physically based shading, soft studio light), `stained-glass` (deep jewel colour carried by light). Atelier style: no demo film yet, see [`../README.md`](../README.md).

## 1. Essence, and what it is not

The frame is filled, edge to edge, with fabric. Folds are the composition: a ridge leads the eye, a valley holds the shadow, a highlight runs along a crest like a line being drawn. Things are shown by being uncovered, wrapped, or pressed into the cloth from behind so their shape appears in relief.

Not a flag waving in wind, not an abstract fluid simulation, not a fashion show. The cloth is heavy and it moves slowly.

## 2. Materials and rendering

- **Silk satin**: anisotropic sheen, so highlights stretch along the weave and slide when the cloth moves. A narrow bright crest, a quick falloff, deep saturated shadow.
- **Weight**: folds are large and few. The cloth hangs and pools; it never flutters.
- **Simulation**: a pinned cloth grid or a displaced surface with fold-shaped noise. Animate by moving the pins or the wind slowly; let the folds follow.
- **Light**: one soft key raking from the side at a low angle, so every fold has a lit face and a shadowed one. A weak rim light in the complementary direction.
- **Relief**: an object behind the cloth pushes it forward; the shape reads from highlights alone.
- **Other materials**, sparingly: a pearl, a gold chain, skin. Each catches the same light.

## 3. Colour logic

Three jewel tones per film at most, one per chapter: for example emerald, garnet and sapphire, or ink, plum and old gold. Within a shot there is one colour, in every value from near black to a bright crest. Changes of colour happen when one cloth slides off another.

## 4. Type

Gold or ivory, a refined serif with small capitals, appearing as if embroidered: stitched along a path over about a second, sitting on the cloth and bending with it. Short: a name, a word, a date.

## 5. Motion and camera

- Everything is slow. A fold takes 3 to 5 s to travel across the frame.
- The camera is close and moves along a fold like a hand running over it.
- **The pull**: cloth is drawn away to one side or downward, in one continuous motion with a little acceleration, and what was covered is there.
- Transitions are made of cloth: a fold passes the lens, or the next colour slides over.

## 6. Sound

Low strings or a solo cello, sustained. The foley is all fabric: a long soft rush as cloth is pulled, a settle, a whisper of two layers. One clear small sound for the reveal, such as a clasp or a single harp note.

## 7. Native moves

- **Unveiling**: the subject is a relief under silk, then the silk is pulled.
- **The river**: a long shot travelling down a single fold, with objects resting in it like stones in a stream.
- **Wrapping**: cloth rises around the subject and closes over it, ending a chapter.
- **Two colours**: one cloth slides off another, and the palette changes with the scene.

## 8. Pitfalls

- Plastic-looking cloth: highlights too round or too white. Stretch them along the weave and tint them.
- Small, busy wrinkles. Fewer, larger folds.
- Fast motion. If it ripples like water, slow it down by three.
- Flat lighting from the front. Without raking light there are no folds.
