# IT OJT Program - Responsive Website

A modern, professional, and fully responsive website for an Information Technology On-The-Job Training (OJT) program.

## 📋 Project Overview

This website showcases an IT OJT program with a complete set of pages designed for both desktop and mobile devices. The design follows modern web standards with a blue and white color scheme.

## 📁 File Structure

```
ABCCA/
├── index.html          # Home page
├── about.html          # About the Program page
├── trainees.html       # Trainees showcase page
├── projects.html       # Projects portfolio page
├── contact.html        # Contact and FAQ page
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 📄 Pages Included

### 1. **Home Page (index.html)**
- Hero section with welcome message
- Features showcase with 4 key benefits
- Call-to-action section
- Navigation bar and footer

### 2. **About the Program (about.html)**
- Program overview
- Program highlights and features
- Learning outcomes
- Structured curriculum information

### 3. **Trainees (trainees.html)**
- Grid of 8 trainee cards with:
  - Profile emoji avatars
  - Role and specialization
  - Bio description
  - Skill tags
- Statistics section showing program metrics

### 4. **Projects (projects.html)**
- Portfolio of 8 completed projects:
  - E-Commerce Platform
  - Task Management App
  - Analytics Dashboard
  - Security Audit Tool
  - Cloud Infrastructure Setup
  - Design System
  - Learning Management System
  - Automated Testing Suite
- Technology tags for each project
- Project statistics

### 5. **Contact Page (contact.html)**
- Contact form with validation
- Contact information section
- Business hours and location
- Social media links
- Expandable FAQ section with 5 questions

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Blue (#0052cc)
- **Primary Dark**: Navy Blue (#003d99)
- **Secondary Color**: White (#ffffff)
- **Background**: Light Blue (#f5f7fa)
- **Text Color**: Dark Gray (#333333)

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Modern, clean, professional appearance

### Components
- Sticky navigation bar
- Hamburger mobile menu
- Responsive cards and grids
- Interactive accordion FAQ
- Contact form with validation
- Smooth animations and transitions
- Scroll-to-top button

## 📱 Responsive Breakpoints

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## ⚙️ JavaScript Features

### 1. **Mobile Menu Toggle**
- Hamburger menu for mobile devices
- Animated transitions
- Close menu when link is clicked

### 2. **Contact Form Validation**
- Email validation
- Required field checking
- Success/error feedback messages

### 3. **FAQ Accordion**
- Click to expand/collapse questions
- Only one answer visible at a time
- Smooth animations

### 4. **Navigation Highlighting**
- Active link highlighting based on current page

### 5. **Scroll-to-Top Button**
- Appears when user scrolls down 300px
- Smooth scroll to top functionality
- Hover effects

### 6. **Page Load Animations**
- Fade-in animation for cards
- Intersection observer for scroll animations
- Staggered animation timing

### 7. **Form Enhancements**
- Input focus effects
- Field validation on blur
- Visual feedback

### 8. **Smooth Scrolling**
- Smooth scroll behavior for anchor links
- Cross-browser compatible

## 🚀 How to Use

### Getting Started
1. Open `index.html` in your browser
2. Or serve the files using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
3. Navigate to `http://localhost:8000` (or the port shown)

### File Setup
All files should be in the same directory:
- HTML files: `index.html`, `about.html`, `trainees.html`, `projects.html`, `contact.html`
- CSS file: `styles.css`
- JavaScript file: `script.js`

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css` (lines 8-16):
```css
:root {
    --primary-color: #0052cc;
    --primary-dark: #003d99;
    --secondary-color: #ffffff;
    /* ... other variables ... */
}
```

### Adding New Pages
1. Create a new HTML file
2. Copy the navigation and footer from an existing page
3. Link it in the navigation menu
4. Add the page to `styles.css` if needed

### Updating Content
- Edit the text in HTML files directly
- All content is self-contained within each page
- Update contact information in multiple places (navbar footer, contact page)

### Modifying Trainees/Projects
- Add or remove cards by copying the card HTML structure
- Update the content within each card
- JavaScript will handle styling and interactions automatically

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Features Highlights

✅ Fully Responsive Design
✅ Modern and Professional UI
✅ Interactive Navigation
✅ Contact Form with Validation
✅ FAQ Accordion
✅ Mobile-First Approach
✅ Smooth Animations
✅ Accessible Color Scheme
✅ Semantic HTML
✅ Clean, Organized CSS
✅ Well-Commented JavaScript
✅ No External Dependencies (Vanilla HTML/CSS/JS)

## 🎯 SEO Friendly

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions
- Responsive viewport settings
- Mobile-optimized

## 📝 Notes

- No external libraries or frameworks are used
- All code is vanilla HTML, CSS, and JavaScript
- Form submission currently shows a success message locally (in production, you'd need backend integration)
- Emoji icons are used for simplicity (can be replaced with actual images)
- All animations use CSS and JavaScript for optimal performance

## 🚀 Future Enhancements

Potential improvements:
- Backend integration for form submissions
- Database for trainee and project information
- Image gallery/carousel
- Search functionality
- Blog section
- Event calendar
- Student testimonials
- Live chat support
- Dark mode toggle
- Multi-language support

## 📞 Contact & Support

For any questions or custom modifications, you can extend this project with:
- Backend technologies (Node.js, Python, etc.)
- Database systems (MongoDB, PostgreSQL, etc.)
- CMS integration
- E-commerce functionality
- Payment gateway integration

---

**Created**: 2026
**Last Updated**: March 9, 2026
**Version**: 1.0
