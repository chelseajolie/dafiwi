# Dafiwi - Island Delivery Service

A static website for Dafiwi, a delivery service company that connects the islands of San Andrés, Providencia, and Santa Catalina with the mainland.

## Features

- 🌐 **Bilingual Support**: Toggle between English and Spanish with flag icons
- 📱 **Responsive Design**: Mobile-friendly and works on all devices
- 🌐 **Bilingual**: Full support for English and Spanish
- ️ **Island-Focused**: Tailored for the unique needs of island delivery
- 📱 **Responsive**: Optimized for all devices
- ⚡ **Fast & Static**: No server-side processing required
- 🚀 **GitHub Pages Ready**: Fully compatible with GitHub Pages hosting

## Pages

- **Home** (`index.html`): Landing page with hero section and service overview
- **Products** (`products.html`): Delivery service plans and product categories
- **About Us** (`about.html`): Company mission, vision, and coverage areas

## Project Structure

```
dafiwi/
├── index.html          # Landing page
├── products.html       # Products and services page
├── about.html          # About us page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── language.js     # Language switcher functionality
└── README.md           # This file
```

## Language Toggle


The website supports two languages:
- 🇺🇸 English (US)
- �� Spanish

Users can switch between languages using the language toggle in the header.

Language preference is saved in the browser's localStorage, so users' language choice persists across visits.

## Deployment to GitHub Pages

### Option 1: Using GitHub Interface

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `main` branch
4. Click **Save**
5. Your site will be published at `https://chelseajolie.github.io/dafiwi/`

### Option 2: Using Command Line

```bash
# Make sure you're in the repository directory
cd /home/alejandro/Code/dafiwi

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Dafiwi website"

# Push to GitHub
git push origin main
```

Then enable GitHub Pages in your repository settings as described in Option 1.

## Local Development

To view the website locally, simply open `index.html` in your web browser. No build process or server is required.

Alternatively, you can use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## Coverage Areas

Dafiwi provides delivery services to:
- San Andrés Island
- Providencia Island
- Santa Catalina Island

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks)
- LocalStorage for language preference

## Browser Support

The website is compatible with all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android

## License

© 2025 Dafiwi. All rights reserved.

## Contact

- Email: info@dafiwi.com
- Phone: +57 123 456 7890
dafiwi website
