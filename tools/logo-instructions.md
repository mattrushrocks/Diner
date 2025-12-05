Generating density-aware PNGs for the logo

This repo now contains a crisp scalable SVG at `images/logo.svg`. To create the requested transparent PNG files at 50×50 (1x), 100×100 (2x) and 150×150 (3x), use one of the methods below.

macOS `sips` (built-in):

```bash
mkdir -p images
# from the SVG (macOS sips can rasterize SVG)
sips -Z 50 images/logo.svg --out images/logo-1x.png
sips -Z 100 images/logo.svg --out images/logo-2x.png
sips -Z 150 images/logo.svg --out images/logo-3x.png
```

ImageMagick (`convert` / `magick`) — recommended for cross-platform builds:

```bash
# If you have ImageMagick installed (magick recommended on newer installs)
magick convert images/logo.svg -background none -resize 50x50 images/logo-1x.png
magick convert images/logo.svg -background none -resize 100x100 images/logo-2x.png
magick convert images/logo.svg -background none -resize 150x150 images/logo-3x.png
```

Optional: compress the PNGs with `pngquant` for smaller files:

```bash
pngquant --force --output images/logo-1x.png --quality=65-85 images/logo-1x.png
pngquant --force --output images/logo-2x.png --quality=65-85 images/logo-2x.png
pngquant --force --output images/logo-3x.png --quality=65-85 images/logo-3x.png
```

Verify usage in HTML

The `index.html` `picture` element expects these files at:
- `images/logo-1x.png` (50×50)
- `images/logo-2x.png` (100×100)
- `images/logo-3x.png` (150×150)

If you prefer I generate & add the PNGs in the repo, either
- upload a high-resolution master (PNG, SVG, or PSD), or
- let me know and I can create placeholder PNGs (low-fidelity) automatically.
