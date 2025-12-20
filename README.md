# Mateo's Portfolio (React)

Personal portfolio built with React (Create React App) to showcase personal/professional information, projects, and a contact form that sends emails using EmailJS.
You can access this site at: [https://mateoportfolioweb.netlify.app/](https://mateoportfolioweb.netlify.app/)

## Tech Stack

- React + Create React App
- Material UI (MUI): components and icons
- EmailJS: client-side email sending from the contact form
- Modular CSS per section (folder `src/styles/`)

## Sections / Navigation

Navigation is **hash-based** (no React Router). Available links:

- `#home`
- `#info`
- `#projects`
- `#contact`

## Main Features

### Projects

- Project cards include:
  - Image carousel (prev/next)
  - Repository link (GitHub)
  - Live site link (Language icon) if `url-access` exists in the JSON
  - Technologies rendered as `InterestCard`
- Filters:
  - Text input + **Add filter** button
  - Active filter “chips” (InterestCard)
  - Clicking a chip removes only that filter
  - **Reset filters** button clears everything
  - Filters by project name or technologies (case-insensitive)
  - If there are no results: `There are no projects that meet the filter criteria`
  - When filters are active, matching technologies are highlighted in light green

### Info

- Toggle between **Personal Info** and **Professional Info**
- Interests/stack lists rendered with `InterestCard`
- Professional experience section

### Contact

- Validated form (submit disabled until valid)
- EmailJS integration (requires environment variables)

## Install and Run

Recommended requirements:

- Node.js (LTS)
- npm

Commands:

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## EmailJS Setup (Contact Form)

The contact form uses these environment variables (Create React App requires the `REACT_APP_` prefix):

- `REACT_APP_EMAILJS_PUBLIC_KEY`
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`

1) Create a `.env` file at the project root:

```bash
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

2) Restart the dev server (`npm start`) to load the env vars.

3) In EmailJS, the template should accept (based on the current client-side payload):

- `to_email`
- `from_name`
- `reply_to`
- `subject`
- `message`

Note: `to_email` is currently set in the frontend (see `src/components/ContactForm.js`). If you want it to be configurable, change that value or move it to an environment variable.

## Data and Assets

### Projects

Projects are loaded from:

- `src/data/projects.json`

Fields currently used by the UI:

- `id`
- `title`
- `description`
- `repoUrl`
- `technologies` (array of strings)
- `images` (array of `{ src, alt }`)
- `url-access` (string; if empty, the live link is hidden)

Images are served from `public/` (for example: `public/projectImages/...`) and referenced with paths like `/projectImages/...`.

### Top lists (Personal Info)

- `src/data/topVideoGames.json`
- `src/data/topMovies.json`

## Scripts

```bash
npm start
npm test
npm run build
```

## Troubleshooting

- If `npm start` exits with an error:
  - Make sure `npm install` completed successfully
  - Try deleting `node_modules/` + `package-lock.json` and reinstalling
  - Use a Node.js LTS version
- If EmailJS does not send:
  - Confirm `REACT_APP_EMAILJS_*` variables are set and you restarted the dev server
  - Check your EmailJS service/template status and allowed origins/domain settings
