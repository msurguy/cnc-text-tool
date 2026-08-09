# CNC Single‑Line Text Tool

> **This tool has moved!** It's now called **Plotter Text** and is hosted at **[drawingbots.com/tools/plotter-text](https://drawingbots.com/tools/plotter-text/)**. The old GitHub Pages URL (`msurguy.github.io/cnc-text-tool`) now shows a notice and redirects there — `docs/index.html` in this repo is that redirect page, not the app. Rebuilding with `npm run build` would overwrite it with the old app, so don't rebuild unless you intend to undo the redirect.

[Open the tool](https://drawingbots.com/tools/plotter-text/) — design clean, single‑stroke text for pen plotters, laser engravers, and CNC machines right in your browser.

This app lets you lay out multi‑line, single‑line (Hershey/engraving) text on top of an SVG, tweak spacing and alignment, and export a ready‑to‑cut SVG. No installs, no sign‑ups — everything runs locally in your browser.

Made by Maks Surguy, creator of [Drawingbots.net](https://drawingbots.net/) and [Plotterfiles.com](https://plotterfiles.com/). More tools: https://drawingbots.net/knowledge/tools

## Highlights

- Single‑line fonts: Built for plotting, vector engraving, and V‑carving.
- Multi‑layer text: Add, select, and manage multiple text layers.
- Precision controls: Font size, line height, character spacing, alignment, rotation, and color inversion (black/white).
- SVG background: Upload an existing SVG as your canvas to position text exactly where you need it.
- Direct manipulation: Drag to move, rotate/scale with handles, or nudge with arrow keys.
- Clean export: Downloads a flattened, stroke‑only SVG with round caps — perfect for CAM or plotting software.
- Private by design: Runs entirely in your browser; no files are uploaded.

## Quick Start

1. Open the live tool: https://msurguy.github.io/cnc-text-tool/
2. (Optional) Upload an SVG of your workpiece or design ("Upload File").
3. Add a text layer and type your text.
4. Pick a single‑line font and adjust size, spacing, line height, alignment, and rotation.
5. Position text by dragging on the canvas or entering exact X/Y.
6. Download your SVG (toggle "text only" if you don’t want the background included).

## Keyboard Shortcuts

- Esc: Deselect selection
- Arrow keys: Nudge selected layer (hold Shift for 10×)
- Cmd/Ctrl+Z: Undo
- Shift+Cmd/Ctrl+Z or Cmd/Ctrl+Y: Redo
- R: Reset rotation
- + / −: Increase / decrease font size (hold Shift for larger steps)

## Exporting

- Exported files are standard SVGs containing stroke‑only paths, scaled to your document units, with `stroke-linecap=round` for smooth pen/laser motion.
- Use "text only" to export just the text (no background) when your CAM/plotter software handles the rest of the layout.
- If your workflow needs DXF or another format, import the SVG into Inkscape/Illustrator or convert with your preferred tool.

## Fonts and Licensing

The bundled single‑line fonts are sourced from:

- https://gitlab.com/oskay/svg-fonts
- https://github.com/isdat-type/Relief-SingleLine
- http://cutlings.wasbo.net/products-fonts/
- https://github.com/Shriinivas/inkscapestrokefont

Please review the original repositories for each font’s license before redistributing fonts. The code in this repo is MIT‑licensed; fonts retain their respective licenses (often embedded in the SVG font files).

## Development

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build for production (outputs to `docs/`): `npm run build`
- Preview production build: `npm run preview`

Project layout:

- Entry: `index.html`
- React app: `src/react/**`
- Static assets and fonts: `public/` (fonts under `public/fonts/**`)
- Vite config: `vite.config.js`

## License

Code: MIT. Fonts: see their respective licenses in the source repositories and/or embedded in the font SVGs.
