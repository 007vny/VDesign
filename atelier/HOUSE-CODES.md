# House codes: the VDesign finish

A film reads as expensive when it looks as though someone could have added more and chose not to. These codes are that choice, written down. Lay them over any style; the style's own `STYLE.md` wins a conflict.

## 1. Colour is rationed

- One ground, one neutral, one accent. The accent covers at most 5 % of any frame and belongs to the subject.
- No pure black and no pure white. Grounds sit around `#0c0b0a` (warm) or `#0a0c0f` (cool); paper sits around `#f4efe6`.
- Metal is a gradient with a dark band in it, never a flat yellow. Gold: `#6b4e1e → #d9b36a → #fff1c9 → #b88a3e`.
- Saturation falls as the frame gets fuller. A wide shot is nearly monochrome; colour arrives in the close-up.

## 2. Empty space is a material

- The subject occupies between a fifth and a third of the frame. The rest is ground, and the ground is designed: a gradient, a grain, a falloff of light.
- Margins are generous and constant: 8 % of the frame width at 16:9, 10 % at 9:16. Nothing but the subject may break them.
- One idea per shot. If a second thing needs saying, it gets its own shot.

## 3. Type whispers

- Two families at most: a high-contrast serif for titles (Cormorant Garamond, Playfair Display, Bodoni Moda) and a plain grotesque for small text (Jost, Inter, Figtree). All are open licences.
- Titles are large and light, or small and widely spaced. Never medium. Small caps and labels are tracked at +120 to +220.
- Text arrives by opacity and a rise of 8 to 12 px over 0.6 to 0.9 s. It never bounces, types on or slides the width of the screen.
- No more than seven words on screen at once. A number may stand alone.

## 4. The hand is slow

- Shots run 3 to 6 s. Fewer than twelve cuts in a 40 s film.
- Every move eases in and out with a long tail (`cubic-bezier(.16, 1, .3, 1)` or slower). Nothing overshoots.
- The camera moves on one axis at a time, and slowly enough that a still frame from any moment could be a photograph.
- Hold the final image for at least 2.5 s before the sign-off.

## 5. Light has a source

- One key, from one side, with a visible falloff. Fill is a quarter of the key or less.
- Highlights are small and precise. Reflections move when the camera does.
- Depth of field is shallow in close-ups and honest about it: the blur grows with distance and the highlights bloom into discs.

## 6. Sound leaves room

- A small ensemble: piano, a string or two, a low pad. One instrument carries the melody at a time.
- Tempo between 56 and 76 bpm, or free. Silence before the main image for at least half a second.
- Foley is close and soft: a click, a breath of cloth, a glass set down. Never a whoosh on a cut.
- Narration, when there is any, is low, unhurried and short: under 55 words for a 40 s film. Mix at −14 LUFS with at least 9 dB between voice and bed.

## 7. The sign-off

- The mark appears once, at the end, small, centred, on the ground colour, after a beat of nothing.
- No call to action shouted in capitals. A name, and at most one line under it.

## Checks before delivery

1. Pause on five random frames. Each should work as a still, with its margins intact.
2. Count the colours in the widest shot. More than three means something is decorating.
3. Read every word on screen aloud at the speed it appears. If you run out of time, cut words, not seconds.
4. Listen once without picture. If the track is busy enough to stand alone, it is too busy.
