# Kshitij's Portfolio Website

A modern, responsive portfolio website built with React, showcasing software engineering skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging user experience with Framer Motion animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form for potential clients/employers
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Interactive skill bars and categorized expertise
- **Professional Sections**: About, Experience, Projects, Skills, and Contact sections

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Animations**: Framer Motion for smooth animations
- **Icons**: React Icons for consistent iconography
- **Navigation**: React Scroll for smooth scrolling
- **Responsive Design**: Mobile-first approach with CSS Media Queries

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal background and core competencies
3. **Experience**: Professional work history with timeline design
4. **Projects**: Portfolio of work with filtering capabilities
5. **Skills**: Technical expertise with visual skill bars
6. **Contact**: Contact form and professional information
7. **Footer**: Social links and additional navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with the production-ready application.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Experience.js   # Experience timeline
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills visualization
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── components/          # Component-specific CSS
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Experience.css
│   ├── Projects.css
│   ├── Skills.css
│   ├── Contact.css
│   └── Footer.css
├── App.js              # Main App component
├── App.css             # Global styles and CSS variables
└── index.js            # Application entry point
```

## 🎨 Customization

### Colors and Themes

The portfolio uses CSS variables for easy customization. Edit the `:root` section in `App.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... other variables */
}
```

### Content Updates

- **Personal Information**: Update personal details in each component
- **Projects**: Modify the projects array in `Projects.js`
- **Skills**: Adjust skill levels and categories in `Skills.js`
- **Experience**: Update work history in `Experience.js`
- **Contact**: Change contact information in `Contact.js`

### Images

Replace placeholder images with your own:

- Update project images in the `Projects.js` component
- Add a profile photo in the `Hero.js` component
- Customize the avatar placeholder in the hero section

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Responsive grid layouts
- Mobile navigation menu
- Adaptive typography
- Touch-friendly interactions
- Optimized spacing for different screen sizes

## 🚀 Deployment

### GitHub Pages

1. Add homepage to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

### Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy on push

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: kshitij@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Note**: This is a template portfolio. Please update all personal information, projects, and contact details before deploying.
