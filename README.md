# vex-website

Download landing page for the [Vex](https://github.com/0xmortuex/Vex) browser.
Static HTML/CSS/JS — no build step, no dependencies.

## Local preview

Just open `index.html`, or serve the folder:

```bash
npx serve .
```

## Deploy

Hosted on GitHub Pages from `main`. Any push updates the live site.

## Download button

The primary button points at:

```
https://github.com/0xmortuex/Vex/releases/latest/download/Vex-Setup.exe
```

This resolves only once a **GitHub Release** exists on `0xmortuex/Vex` with a
`Vex-Setup.exe` asset. Produce it from the Vex repo with:

```bash
npm run dist        # builds dist/Vex-Setup.exe
# then create a Release and upload that file, or:
npm run publish     # electron-builder publishes to GitHub Releases
```
