# UrbanNest Interiors — Official Business Website

> **"Spaces that feel like you."**  
> CYVEXA Project-Based Internship Program – Level 1 (Beginner)  
> Track: Web Design & Frontend Development

---

## 1. Project Overview

**UrbanNest Interiors** is a premier boutique interior architecture and design firm based in Anna Nagar, Chennai. Founded in 2018, the studio has completed over 250 bespoke residential and commercial transformations across Chennai, backed by a multidisciplinary team of 14 architects, 3D visualizers, civil engineers, and master craftsmen.

This repository contains the complete, production-ready, fully responsive static business website built strictly using semantic HTML5, modern CSS3, vanilla JavaScript, and the Open-Meteo REST API. It strictly fulfills all **13 CYVEXA Level 1 Internship Tasks** without external CSS frameworks (no Bootstrap, Tailwind) or JavaScript libraries (no React, jQuery).

---

## 2. Business Information

- **Company Name:** UrbanNest Interiors
- **Tagline:** "Spaces that feel like you."
- **Studio Address:** 12, Lake View Road, Anna Nagar, Chennai, Tamil Nadu 600040
- **Phone:** +91 90000 00000
- **Email:** `hello@urbannest-interiors.example`
- **Operating Hours:**
  - Monday &ndash; Saturday: 9:30 AM &ndash; 7:00 PM
  - Sunday: By Prior Appointment Only
- **Heritage:** Founded in 2018 in Anna Nagar, Chennai
- **Key Milestones:** 250+ completed projects, 8 years of heritage, 180+ happy families, 4.8/5 average client rating
- **Team Size:** 14 professionals, led by:
  1. *Ananya Iyer* &ndash; Founder &amp; Principal Designer
  2. *Rohit Menon* &ndash; Head of Projects
  3. *Sneha Pillai* &ndash; Senior 3D Visualizer
  4. *Vijay Kumar* &ndash; Site Operations Lead

---

## 3. Technology Stack

- **Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`)
- **Styling:** Vanilla CSS3 with CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, clamp() fluid typography, and glassmorphism
- **Scripting:** Vanilla JavaScript (ES6+), Fetch API, DOM manipulation via `textContent`, `IntersectionObserver`
- **Typography:** Google Fonts (`Playfair Display` for headings, `Poppins` for body copy)
- **External API:** Open-Meteo Public REST API (Chennai coordinates: Lat 13.0827, Lon 80.2707)
- **Version Control:** Git &amp; GitHub compatible

---

## 4. Multi-Page Architecture

The website contains four fully functional, interconnected pages:

1. **Home (`index.html`)**
   - Sticky blur navigation bar with brand logo and mobile hamburger toggle.
   - Hero section featuring brand heading: *"Spaces that feel like you."*
   - Dynamic **Open-Meteo Chennai Weather Widget** displaying live temperature, WMO weather condition icons, humidity, and wind speed.
   - 6 Featured Service cards preview with starting prices and direct booking links.
   - *Why Choose UrbanNest* four value pillars.
   - Live animated company statistic counters (250+ Homes, 8 Years, 180+ Families, 4.8/5 Rating).
   - Touch-enabled Customer Testimonials carousel slider with autoplay.
   - Expandable FAQ accordion with smooth CSS transitions.
   - Call to action banner and global footer with external image credits.

2. **About Us (`about.html`)**
   - In-depth company introduction and studio heritage starting from 2018 in Anna Nagar.
   - Core Mission and Vision cards.
   - Credentials strip with animated metrics.
   - Profiles of the 4 key leadership figures (Ananya Iyer, Rohit Menon, Sneha Pillai, Vijay Kumar) highlighting roles, qualifications, and focus areas within the broader team of 14.
   - Verified client testimonial endorsement spotlight.

3. **Services & Pricing (`services.html`)**
   - Interactive category filter tabs (`All Services`, `Residential`, `Commercial`, `Specialized`).
   - Detailed cards for all six interior service lines with transparent starting prices:
     1. **Full Home Interiors** &ndash; &#8377;4,50,000
     2. **Modular Kitchen** &ndash; &#8377;1,20,000
     3. **Living &amp; Bedroom Design** &ndash; &#8377;65,000
     4. **Office Interiors** &ndash; &#8377;3,00,000
     5. **3D Design &amp; Visualization** &ndash; &#8377;15,000
     6. **Renovation &amp; Makeover** &ndash; &#8377;80,000
   - Structured **Four-Step Execution Framework**:
     1. `CONSULT` &ndash; Free 30-minute discovery consultation.
     2. `DESIGN` &ndash; Spatial layout, photorealistic 3D views, and material curation.
     3. `BUILD` &ndash; Off-site fabrication and on-site assembly with weekly video logs.
     4. `HANDOVER` &ndash; 120-point quality check, deep cleaning, and 1-year service warranty.
   - Direct consultation booking CTAs with query-string preselection for each service.

4. **Contact & Studio Visit (`contact.html`)**
   - Studio physical address in Anna Nagar, telephone click-to-call, email, and hours.
   - Embedded interactive Google Map of Anna Nagar, Chennai.
   - Social media channels (`rel="noopener noreferrer"`).
   - Complete **7-Field Validated Contact Form**:
     1. *Full Name* (Required, min 3 chars, letters and spaces only).
     2. *Email Address* (Required, valid email format).
     3. *Phone Number* (Required, exactly 10 digits starting with 6&ndash;9).
     4. *Service Interested In* (Required dropdown covering all 6 services; pre-selects via URL parameters).
     5. *Budget Range* (Optional styled radio options: Under &#8377;1 lakh, &#8377;1&ndash;5 lakh, Above &#8377;5 lakh).
     6. *Project Message* (Required, 20&ndash;500 characters with live character counter).
     7. *Consent Checkbox* (Required: "I agree to be contacted...").
   - Real-time inline field error messages (no `alert()` popups).
   - Data preservation on failed validation.
   - Asynchronous processing simulation with disabled submit state and loading spinner.
   - User-tailored success alert confirmation banner.

---

## 5. Official Brand Identity & Asset Pack (Level 1)

```text
UrbanNest Interiors - Asset Pack (Level 1)

logo.svg / logo.png   Company logo (use SVG where possible)
favicon.png           Browser tab icon (128x128)
images/               Placeholder images. Replace with free-licence photos
                      (Unsplash / Pexels) if you wish and credit them in the footer.

Palette: Green #2F5D50 | Gold #E9C46A | Cream #F4F1EA | Charcoal #264653
Fonts  : Playfair Display (headings), Poppins or Inter (body) from Google Fonts

Remember to compress images and add alt text on every <img>.
```

### Color Palette
- **Deep Green:** `#2F5D50` &ndash; Primary brand authority, sophistication, architectural presence.
- **Warm Gold:** `#E9C46A` &ndash; Luxury accents, badges, highlights, interactive active states.
- **Cream:** `#F4F1EA` &ndash; Warm welcoming section backgrounds, editorial elegance.
- **Charcoal:** `#264653` &ndash; High-contrast headings, dark section contrasts, footer.
- **White:** `#FFFFFF` &ndash; Clean card surfaces, whitespace breathing room.

### Typography
- **Headings:** `Playfair Display`, serif (400, 600, 700)
- **Body Copy:** `Poppins`, sans-serif (300, 400, 500, 600)

### Visual Direction
- Modern luxury minimalism, generous whitespace, rounded pill buttons (`border-radius: 9999px`), subtle drop shadows (`0 8px 24px rgba(38, 70, 83, 0.08)`), and smooth hover interactions (`transform: translateY(-4px)`).
- Touch target sizes maintain a minimum of **44px &times; 44px** on all viewports.

---

## 6. Public REST API Integration

The website integrates the **Open-Meteo REST API** to showcase real-time Chennai meteorological data directly on the homepage:

- **Endpoint:** `https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`
- **Features:**
  - Displays real-time temperature in Celsius (&deg;C), WMO condition description (e.g. *Mainly Clear*, *Thunderstorm*), day/night weather emoji icons, relative humidity (%), and wind speed (km/h).
  - Four distinct UI states: **Loading spinner**, **Live content**, **Error fallback**, and **Manual update refresh**.
  - No API key required.
  - Fail-safe design: If the API is unreachable, a friendly retry button is rendered and the site remains 100% operational.

---

## 7. JavaScript Interactions Implemented

1. **Mobile Hamburger Drawer:** Accessible toggle navigation (`aria-expanded`), auto-closes on navigation or `Escape` key press.
2. **Dynamic Live Weather Card:** Asynchronous `fetch()` API integration with WMO mapping and refresh controls.
3. **Animated Number Counters:** Smooth cubic-bezier number increment animations triggered by `IntersectionObserver`.
4. **Testimonial Carousel Slider:** Smooth CSS transforms, auto-rotation every 6s, touch swipe detection, and pagination dots.
5. **Interactive FAQ Accordion:** Expanding panels with auto-collapsing siblings and rotating SVG chevrons.
6. **Services Category Filter:** Tabbed DOM filtering between Residential, Commercial, and Specialized categories.
7. **Contact Form Validation Engine:** Real-time regex testing, inline error alerts, live character counter, and async simulation.
8. **Floating Back-to-Top Button:** Smooth scrolling trigger that appears after 350px of vertical scroll.

---

## 8. Security & Data Integrity

- **XSS Prevention:** All dynamic data (weather fields, submitted form names) are injected strictly via `.textContent`, avoiding insecure `innerHTML`.
- **HTTPS Enforcement:** External fonts, APIs, and map embeds strictly utilize secure HTTPS endpoints.
- **Tab-Nabbing Protection:** All external links opening new tabs include `rel="noopener noreferrer"`.
- **Frontend Validation:** Multi-step regex checks validate field structure, type, and boundaries before processing.
- Detailed audit available in [`docs/security-checklist.md`](docs/security-checklist.md).

---

## 9. Performance & SEO Optimizations

- **Image Compression:** All 15 images converted to WebP format and compressed strictly **under 200 KB each** (ranging from 4 KB to 158 KB).
- **Lazy Loading:** `loading="lazy"` attributes implemented across non-hero imagery.
- **Font Optimization:** Google Fonts preconnected via `rel="preconnect"`.
- **Metadata:** Unique `<title>`, `<meta name="description">`, OpenGraph tags, and favicon on every page.
- **Headings Hierarchy:** Exactly one `<h1>` per page with semantically ordered subheadings (`<h2>`, `<h3>`).
- Comprehensive audit results documented in [`docs/testing-report.md`](docs/testing-report.md).

---

## 10. Project Folder Structure

```
UrbanNest-Interiors/
│
├── index.html                  # Home page
├── about.html                  # About Us & Team page
├── services.html               # 6 Services, Pricing & 4-Step Process
├── contact.html                # Contact Studio & 7-Field Validated Form
│
├── css/
│   └── style.css               # Unified design token stylesheet
│
├── js/
│   ├── main.js                 # Header, Weather API, Stats, Slider, FAQ, Filter
│   └── form.js                 # 7-Field Form validation & state handling
│
├── assets/
│   ├── logo.svg                # Primary vector architectural logo
│   ├── logo.png                # High-res raster alternative logo
│   ├── favicon.png             # Site favicon icon
│   └── images/                 # Curated, compressed WebP photos (<200 KB each)
│       ├── hero-living-room.webp
│       ├── service-full-home.webp
│       ├── service-modular-kitchen.webp
│       ├── service-living-bedroom.webp
│       ├── service-office.webp
│       ├── service-3d-viz.webp
│       ├── service-renovation.webp
│       ├── about-studio.webp
│       ├── team-ananya.webp
│       ├── team-rohit.webp
│       ├── team-sneha.webp
│       ├── team-vijay.webp
│       ├── client-karthik.webp
│       ├── client-meera.webp
│       └── client-arjun.webp
│
├── docs/
│   ├── requirements.md         # Visitor personas & 13 task mappings
│   ├── wireframes.md           # Desktop, tablet & mobile wireframe blueprints
│   ├── sitemap.png             # Graphic sitemap architecture
│   ├── testing-report.md       # Quality assurance & browser matrix
│   └── security-checklist.md   # Security audit & headers checklist
│
├── .gitignore                  # Git ignore rules
└── README.md                   # Complete project documentation
```

---

## 11. Local Installation & Development

To preview and test the website locally:

### Option A: Using Python (Built-in)
```bash
# Navigate to the project directory
cd UrbanNest-Interiors

# Start a local HTTP server
python3 -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

### Option B: Using Node.js (npx serve)
```bash
npx serve .
```

### Option C: Direct Browser Launch
Open `index.html` directly in any modern browser (Chrome, Safari, Firefox, Edge).

---

## 12. Deployment Guide

The website is a lightweight, zero-dependency static site that can be deployed instantly to any of the following platforms:

### 1. Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `UrbanNest-Interiors` folder directly into the Netlify dashboard, OR connect your GitHub repository.
3. Build command: *(leave empty)*.
4. Publish directory: `.` (current folder).
5. Click **Deploy Site**.

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`.
2. Inside `UrbanNest-Interiors`, run:
   ```bash
   vercel
   ```
3. Accept default project settings.

### 3. GitHub Pages
1. Push the code to a GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/UrbanNest-Interiors.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository **Settings &rarr; Pages**.
3. Under **Branch**, select `main` and root directory `/`, then click **Save**.
4. Your site will be published at `https://<your-username>.github.io/UrbanNest-Interiors/`.

---

## 13. Image Credits & Licensure

All imagery utilized in this project is licensed under the free Unsplash / Pexels license for commercial and personal use:
- Living Room &amp; Hero Photography: Spacejoy via Unsplash
- Full Home Interior: Collov Home Design via Unsplash
- Modular Kitchen: R ARCHITECTURE via Unsplash
- Bedroom &amp; Living: Sidekix Media via Unsplash
- Commercial Office Interior: Copernico via Unsplash
- Architectural 3D Rendering: Daniil Silantev via Unsplash
- Renovation Makeover: Point3D Commercial Imaging via Unsplash
- Design Studio Workspace: Bench Accounting via Unsplash
- Leadership Portraits: Christina @ wocintechchat, Jurica Koletić, Brooke Cagle, Austin Distel
- Client Testimonial Avatars: Joseph Gonzalez, Michael Dam, Ionut Coman

---

## 14. Internship & Academic Disclosures

- **Program:** CYVEXA Project-Based Internship Program
- **Level:** Level 1 (Beginner)
- **Role:** Full-Stack Web Designer & Frontend Developer Intern
- **Fictional Scenario:** "UrbanNest Interiors" is a simulated interior design business created solely for educational and portfolio demonstration purposes. No commercial transactions or real customer emails are transmitted.
- **AI Tool Usage Disclosure:** AI pairing assistants were utilized for architectural brainstorming, layout optimization, accessibility checks, and comprehensive testing documentation in alignment with modern developer workflow standards.
