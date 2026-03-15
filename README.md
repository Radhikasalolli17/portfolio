# Modern Developer Portfolio

A high-performance, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features
- **Dark Modern UI**: Vibrant gradient accents (purple, blue, pink).
- **Glassmorphism**: Elegant translucent cards and navigation.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals and hover effects.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Sections**: Hero, About, Skills, Projects, Gallery, and Contact.

## Tech Stack
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** (motion/react)
- **Lucide React** (Icons)

## Deployment to GitHub Pages

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   The build output will be in the `dist/` folder. You can use the `gh-pages` package or manually upload the contents of `dist/` to your GitHub repository's `gh-pages` branch.

   To use `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
   Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   Then run:
   ```bash
   npm run deploy
   ```

## Folder Structure
- `src/components/`: Reusable UI sections.
- `src/utils.ts`: Utility functions for Tailwind.
- `src/App.tsx`: Main application assembly.
- `src/index.css`: Global styles and Tailwind theme configuration.
