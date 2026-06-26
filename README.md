# Hammad Ali — Portfolio

A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and background as a web app developer.

**Live site:** [portfolio-lac-one-rn2zqecf0k.vercel.app](https://portfolio-lac-one-rn2zqecf0k.vercel.app)

---

## Overview

This portfolio is a single-page application with smooth scroll navigation across sections — Hero, About, Projects, Skills, and Contact. It's built with a component-based architecture for clean separation of concerns: layout/composition logic lives in `App.jsx`, while project and skill data live in their own files separate from the UI, making it easy to add or update entries without touching component code.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React (Vite) |
| **Styling** | Tailwind CSS v4 |
| **Deployment** | Vercel |

---

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SkillBadge.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Features

- **Smooth-scroll navigation** between sections via a fixed navbar
- **Scroll-aware navbar styling** that adapts (background/border) once the user scrolls past the hero
- **Dynamic project and skill rendering** from a single source of data (`src/data/`), so new projects or skills can be added without editing any component
- **Responsive grid layouts** for both Projects and Skills that scale automatically as items are added or removed
- **Downloadable resume** linked directly from the hero section

---

## Sections

- **Hero** — Name and role, with quick actions to jump to Projects, Contact, or view the resume
- **About** — A short personal introduction
- **Projects** — Cards for each project with description, tech tags, and links to live demos / GitHub
- **Skills** — A grid of core languages, frameworks, and tools
- **Contact** — Direct email and social links (GitHub, LinkedIn)

---

## Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/Hammad-103/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com), which automatically rebuilds and redeploys on every push to the `main` branch.

---



## Contact

- **Email:** hammadali2037@gmail.com
- **GitHub:** [Hammad-103](https://github.com/Hammad-103)
- **LinkedIn:** [hammad-ali-x888](https://www.linkedin.com/in/hammad-ali-x888/)
