# Samoa Code Hub Website

The website for the Samoa Code Hub community, built with SvelteKit

[![Contributors][contributors-shield]][contributors-url][![Stargazers][stars-shield]][stars-url][![Issues][issues-shield]][issues-url][![MIT License][license-shield]][license-url]

![Samoan Flag](https://www.worldatlas.com/img/flag/ws-flag.jpg)

## Languages & Tools

- SvelteKit
- Svelte
- Tailwind CSS

## Getting Started

### Prerequisites

- Node v18.18.1 (LTS)

### Clone the Repo

```sh
git clone https://github.com/SamoaCodeHub/website.git
cd website
```

### Installing dependencies

```bash
npm install
```

### Running the project

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Running Tests

```bash
# Make sure you install playwright browsers
npx playwright install

# Run e2e test
npm run test:e2e
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Analytics

To enable analytics set up Google Analytics set the GA_MEASUREMENT_ID env
variable.

## Contributing

Check out our [Contributions Guideline][contribution-url]

## Environments

### Local

http://localhost:5173

Platform: Local Machine

Description: used for local development, creating new features and bug fixes.

### Staging

https://dev.samoacodehub.org

Platform: Netlify

Description: reflects the latest changes on the main branch. This ensures there is a working website with the most recent updates.

### Production

https://www.samoacodehub.org

Platform: Vercel

Description: the live Samoa Code Hub website. The website is deployed on production once a release tag is created.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SamoaCodeHub/website.svg?style=for-the-badge
[contributors-url]: https://github.com/SamoaCodeHub/website/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/SamoaCodeHub/website.svg?style=for-the-badge
[stars-url]: https://github.com/SamoaCodeHub/website/stargazers
[issues-shield]: https://img.shields.io/github/issues/SamoaCodeHub/website.svg?style=for-the-badge
[issues-url]: https://github.com/SamoaCodeHub/website/issues
[license-shield]: https://img.shields.io/github/license/SamoaCodeHub/website.svg?style=for-the-badge
[license-url]: https://github.com/SamoaCodeHub/website/blob/main/LICENSE.txt
[contribution-url]: https://github.com/SamoaCodeHub/website/blob/main/CONTRIBUTING.md
