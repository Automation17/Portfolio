# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a black and white gradient theme, Arabic/English language switching, and a clean interface.

## Features

- **Modern Design**: Clean black and white gradient UI using a custom color palette
- **Bilingual Support**: Full Arabic and English language switching with RTL support
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Clean UI**: Simple, modern layout with unnecessary animations removed
- **Component-Based Architecture**: Organized, modular component structure

## Tech Stack

- **React 18.2.0**: UI library
- **Vite 5.0.8**: Build tool and dev server
- **React Icons 4.12.0**: Icon library
- **CSS3**: Custom styling with gradients and animations

## Color Palette

The website uses a consistent gradient color scheme:

- **Dark Base**: `#050505` (Background color)
- **Primary Accent**: `#666666` (Primary gradient color)
- **Secondary Accent**: `#ffffff` (Secondary gradient color)

All gradients use only the gray and white colors against the dark base, creating a cohesive modern visual experience.

## Project Structure

```
Portfolio/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main app component
    ├── index.css             # Global styles
    ├── components/           # Component folders
    │   ├── Header/
    │   │   ├── Header.jsx
    │   │   └── Header.css
    │   ├── Hero/
    │   │   ├── Hero.jsx
    │   │   └── Hero.css
    │   ├── About/
    │   │   ├── About.jsx
    │   │   └── About.css
    │   ├── Projects/
    │   │   ├── Projects.jsx
    │   │   └── Projects.css
    │   ├── Skills/
    │   │   ├── Skills.jsx
    │   │   └── Skills.css
    │   └── Contact/
    │       ├── Contact.jsx
    │       └── Contact.css
    ├── context/
    │   └── LanguageContext.jsx  # Language switching context
    └── data/
        ├── en.js              # English translations
        └── ar.js              # Arabic translations
```

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Components Overview

### Header
- Fixed navigation bar with smooth scroll to sections
- Language toggle button (English/Arabic)
- Mobile-responsive hamburger menu
- Glassmorphism effect with scroll detection

### Hero Section
- Centered text content with gradient effects
- CTA buttons (View Work, Contact)
- Social media links (GitHub, LinkedIn, Twitter)
- Scroll indicator animation

### About Section
- Centered description text
- Clean, minimal design

### Projects Section
- Two-column grid layout for project cards
- Each card includes:
  - Project image
  - Title and description
  - Technology tags
  - Hover overlay with gradient background
  - View Project and View Code buttons
- Colored hover effect on buttons

### Skills Section
- Organized into three categories:
  - **Frontend**: React, JavaScript, TypeScript, HTML5, CSS3
  - **Backend**: Node.js, Python, MongoDB, PostgreSQL
  - **Tools**: Git, Docker, AWS
- List-based display with icons
- Hover effects on skill items

### Contact Section
- Contact information cards (Email, Phone, Location)
- Contact form with validation
- Clean submit button with static paper plane icon

## Language System

The website supports full bilingual functionality:

- **Arabic (ar)**: Default language, RTL layout support
- **English (en)**: LTR layout support
- **Automatic Direction**: Document direction updates based on selected language
- **Translation Files**: All text content stored in `src/data/en.js` and `src/data/ar.js`

### Adding New Translations

Edit the translation files in `src/data/`:

```javascript
// src/data/en.js
export default {
  header: {
    home: "Home",
    // ... more translations
  }
};
```

## Styling Approach

- **Gradient Backgrounds**: Solid dark background with gradient accents
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Smooth Transitions**: All interactive elements have smooth transitions
- **Responsive Design**: Mobile breakpoints at 768px
- **Gradient Text**: Headings use gradient text effects
- **Modern Cards**: Hover effects and gradient borders

## Customization

### Changing Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --color-dark: #050505;
  --color-blue: #666666;
  --color-purple: #ffffff;
}
```

### Adding Projects

Edit `src/components/Projects/Projects.jsx`:

```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Node.js"],
    image: "path/to/image.jpg",
    live: "https://your-project.com",
    github: "https://github.com/your-repo"
  }
];
```

### Modifying Skills

Edit `src/components/Skills/Skills.jsx`:

```javascript
const frontendSkills = [
  { icon: <FaReact />, name: "React" },
  // Add more skills
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

Your Name - Portfolio Website

---

Built with ❤️ using React and Vite

