# Informfully.github.io

![Informfully](https://raw.githubusercontent.com/Informfully/Informfully.github.io/refs/heads/main/docs/img/logo_banner.png)

Welcome to Informfully ([GitHub](https://github.com/orgs/Informfully) & [Website](https://informfully.ch/))!
Informfully is an open-source reproducibility platform for content distribution and user experiments.

**Links and Resources:** [GitHub](https://github.com/orgs/Informfully) | [Website](https://informfully.ch) | [X](https://x.com/informfully) | [Documentation](http://informfully.ch/docs) | [DDIS@UZH](https://www.ifi.uzh.ch/en/ddis.html) | [Google Play](https://play.google.com/store/apps/details?id=ch.uzh.ifi.news) | [App Store](https://apps.apple.com/us/app/informfully/id1460234202)

## Local Development

This site is built with [VitePress](https://vitepress.dev/) and requires Node.js (managed here via [nvm](https://github.com/nvm-sh/nvm)).

```console
# Make sure Node is on PATH (only needed if your shell doesn't already load nvm)
source ~/.nvm/nvm.sh

# Install dependencies (run once, or again after package.json changes)
npm install

# Start the local dev server with live reload
npm run docs:dev
```

The dev server prints a local URL (e.g. `http://localhost:5173/`) — open it in a browser to preview changes as you edit files under `docs/`.

Other available scripts:

* `npm run docs:build` — build the static site for production.
* `npm run docs:preview` — serve the production build locally to sanity-check it before deploying.
