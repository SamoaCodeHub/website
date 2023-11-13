# Samoa Stack Overflow Website

The website for the Samoa Stack Overflow community, built with SvelteKit

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
git clone https://github.com/Samoa-Stack-Overflow/sso-website.git
cd sso-website
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

## e2e

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

## Working with Docker

You need docker and docker compose installed for the following steps.

Copy .env-default as .env

```bash
cp .env-default .env
```

Start containers

```bash
docker compose up -d
```

Access the dev environment on http://sso.docker.localhost:5173

To run node commands on CLI run:

```bash
docker compose exec node sh
```

Then execute your commands e.g. npm run build

### Tip: Use alias'

```bash
alias dlup='docker compose up -d; docker compose logs -f node'
alias dup='docker compose up -d'
alias dstop='docker compose stop'
alias dnode='docker compose exec node bash'
alias dlnode='docker compose logs -f node'
alias dc='docker compose'
```


You can preview the production build with `npm run preview`.

## Contributing

Check out our [Contributions Guideline][contribution-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Samoa-Stack-Overflow/sso-website.svg?style=for-the-badge
[contributors-url]: https://github.com/Samoa-Stack-Overflow/sso-website/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/Samoa-Stack-Overflow/sso-website.svg?style=for-the-badge
[stars-url]: https://github.com/Samoa-Stack-Overflow/sso-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/Samoa-Stack-Overflow/sso-website.svg?style=for-the-badge
[issues-url]: https://github.com/Samoa-Stack-Overflow/sso-website/issues
[license-shield]: https://img.shields.io/github/license/Samoa-Stack-Overflow/sso-website.svg?style=for-the-badge
[license-url]: https://github.com/Samoa-Stack-Overflow/sso-website/blob/main/LICENSE.txt
[contribution-url]: https://github.com/Samoa-Stack-Overflow/sso-website/blob/main/CONTRIBUTING.md
