# Yeastie

A minimalist single-page website for **yeastie**, an artisan sourdough bakery.

This website serves as a clean, temporary holding page and showcase, designed to be hosted as a Single Page Application (SPA) on GitHub Pages.

## Project Structure

```text
.
├── .agents/                      # Multi-agent coordination and tracking
├── .github/workflows/pages.yml   # GitHub Pages deployment workflow
├── src/
│   └── spa/
│       ├── index.html            # Main single-page application
│       ├── sourdoughloaf.png     # Sourdough loaf image
│       └── index.test.js         # Automated test suite
├── AGENTS.md                     # Agent development rules and guidelines
└── README.md                     # Project overview and documentation
```

## Features

- **Minimalist Aesthetic**: Clean typography with a blank background focusing on the craft of sourdough baking.
- **Responsive Presentation**: Centered sourdough loaf image styled to take up at most 60% of the viewport width.
- **GitHub Pages Ready**: Self-contained static SPA with zero external dependencies, ready for deployment via GitHub Actions or Pages static hosting.
- **Automated Verification**: Node.js test suite checking HTML structure, metadata, image linkage, responsive styling, and accessibility.

## Running Tests

Run the test suite using Node.js built-in test runner:

```bash
node --test src/spa/index.test.js
```

## Deployment

This site can be deployed automatically to GitHub Pages via GitHub Actions workflow (`.github/workflows/pages.yml`), which publishes the `src/spa` directory directly to GitHub Pages.
