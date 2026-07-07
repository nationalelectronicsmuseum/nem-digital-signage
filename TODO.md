# Deferred work

Items identified during the 2026-07 codebase review that were deliberately
deferred, plus follow-ups now unlocked for content creators.

## Accessibility

- **Vocabulary words are indicated by color alone (WCAG 1.4.1).**
  `.vocabulary-word` in `src/styles/VocabularyOverlay.css` uses only
  `color: #3535d7` to mark tappable definition words. Add an underline
  (dotted is the common convention for definitions) when ready.
- **Swiper prev/next touch targets (WCAG 2.5.8).** The arrows are positioned
  half offscreen (`left: -30px` / `right: -30px` in `src/styles/Section.css`)
  and the default Swiper arrows are thin. Enlarge and pull fully on-screen for
  the touch kiosk.
- **Videos have no `<track>` captions element.** Captions are burned into the
  video files by the content creator, so this is acceptable for now (the
  `jsx-a11y/media-has-caption` lint rule is disabled for the same reason).
  Revisit if videos ever need selectable/localized captions.

## Enhancements

- **High-contrast mode toggle** in the accessibility menu (solid background
  instead of the `bg-opacity.webp` texture). `SettingGroup` already
  generalizes, so this is cheap to add.
- **Backfill per-image alt text.** Slide images may now be authored in content
  JSON as `{ "image": "file.webp", "alt": "…" }` instead of a bare filename.
  Existing images default to empty alt; content creators should add
  descriptions for artifact photos.
