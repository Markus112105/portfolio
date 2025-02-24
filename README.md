# Markus Massina Portfolio

A modern, responsive personal portfolio website showcasing professional skills, projects, and personal interests. Built with React and Tailwind CSS.

## Features
- Responsive design that works on desktop and mobile
- Dark theme with vibrant accents
- Sections for About, Experience, Projects, Skills, and Contact
- Integration with GitHub projects
- Modern UI components from shadcn/ui

## Tech Stack
- React.js
- Tailwind CSS
- shadcn/ui components
- TypeScript
- Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Deploying to GitHub Pages

1. In your GitHub repository settings, ensure GitHub Pages is enabled:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save the settings

2. Deploy the site:
```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch. Your site will be available at:
`https://[your-username].github.io/portfolio`

#### Troubleshooting GitHub Pages Deployment
- After deployment, wait a few minutes for GitHub Pages to build and deploy your site
- Clear your browser cache or use incognito mode to see the latest changes
- Verify that the gh-pages branch contains the built files (index.html, assets, etc.) and not just the README
- Check the GitHub Actions tab for any deployment errors

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure
```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
│   └── index.html
├── public/                # Static assets
└── theme.json            # Theme configuration
```

## Customization
- Edit `theme.json` to customize colors and appearance
- Modify `tailwind.config.ts` for Tailwind CSS configuration
- Update content in the components under `client/src/components/`
