# UrbanNest Interiors — Requirements & Specification Document

**Project:** UrbanNest Interiors Business Website  
**Tagline:** "Spaces that feel like you."  
**Context:** CYVEXA Project-Based Internship Program – Level 1 (Beginner)  
**Location:** 12, Lake View Road, Anna Nagar, Chennai, Tamil Nadu 600040  
**Contact:** hello@urbannest-interiors.example | +91 90000 00000  

---

## 1. Executive Summary

UrbanNest Interiors is a boutique interior design studio based in Anna Nagar, Chennai, founded in 2018. Over the past 8 years, the firm has delivered over 250 residential and commercial spaces with a team of 14 skilled architects, interior designers, 3D visualizers, and site engineers. 

This project delivers a complete, responsive, multi-page business website built strictly with semantic HTML5, modern CSS3, vanilla JavaScript, Google Fonts, and the Open-Meteo REST API. It strictly adheres to all 13 CYVEXA Level 1 internship tasks without third-party CSS or JS frameworks.

---

## 2. Target Audience & Visitor Needs

### Primary Personas
1. **New Homeowners in Chennai (28–45 yrs):**
   - *Profile:* IT and corporate professionals purchasing apartments or villas in OMR, Anna Nagar, Porur, or ECR.
   - *Needs:* Transparent turnkey pricing, contemporary space optimization, modular kitchens, aesthetic living room transformations, reliable timelines, and clear service support.
2. **Independent House & Villa Owners (35–60 yrs):**
   - *Profile:* Families undertaking complete interior redesigns or luxury home renovations.
   - *Needs:* Custom craftsmanship, premium materials, 3D walkthroughs before demolition/construction, dedicated site management.
3. **Commercial & Studio Clients (30–55 yrs):**
   - *Profile:* Small-to-medium enterprise founders, clinic owners, creative agency leads in Chennai.
   - *Needs:* Functional workstations, ergonomic reception areas, acoustic treatment, brand-aligned corporate interiors with defined budgets.

---

## 3. Business Objectives

1. **Lead Generation:** Convert site visitors into qualified consultation bookings via frictionless inquiry points and a multi-field validated contact form.
2. **Trust & Credibility:** Highlight authentic verifiable milestones (250+ projects, 8 years of excellence, 180+ happy families, 4.8/5 rating) and leadership team profiles.
3. **Transparent Pricing:** Clearly articulate baseline pricing for all 6 interior design service lines to eliminate budget mismatch early in the sales funnel.
4. **Process Clarity:** Demystify interior execution through a structured 4-step framework: *Consult &rarr; Design &rarr; Build &rarr; Handover*.
5. **Local Relevance:** Ground the brand firmly in Chennai through neighborhood-specific context and a live weather data integration via Open-Meteo API.

---

## 4. Multi-Page Architecture & Objectives

| Page | Filename | Primary Objective | Key Functional Sections |
| :--- | :--- | :--- | :--- |
| **Home** | `index.html` | Hook visitors, introduce brand essence, demonstrate authority, showcase previews, provide Chennai weather context, direct to consultation. | • Hero with dynamic CTA<br>• Live Chennai Weather Widget (Open-Meteo)<br>• 6 Service Highlights<br>• Why Choose Us Value Pillars<br>• Metric Counters<br>• Testimonial Slider<br>• FAQ Accordion<br>• Footer |
| **About** | `about.html` | Build emotional connection and corporate trust by sharing heritage, philosophy, and team expertise. | • Studio Story (est. 2018 in Anna Nagar)<br>• Mission & Vision Pillars<br>• Key Statistics Grid<br>• Team Spotlight (4 Key Profiles)<br>• Design Philosophy & Core Values<br>• Client Endorsement |
| **Services** | `services.html` | Provide exhaustive details on all six services with transparent pricing, visuals, features, and execution process. | • Interactive Service Filter Tabs<br>• 6 Service Cards with Pricing & CTAs<br>• 4-Step Execution Framework<br>• Material Quality & Guarantee Badges<br>• Free Consultation Banner |
| **Contact** | `contact.html` | Capture qualified client inquiries through a strictly validated, user-friendly booking form and direct studio contacts. | • Contact Details (Anna Nagar Studio)<br>• Operating Hours (Mon–Sat)<br>• Embedded Interactive Map<br>• 7-Field Validated Form with Inline Feedback<br>• Live Character Counter & State Handling |

---

## 5. Mapping of 13 Internship Tasks

| Task # | Task Description | Technical Implementation |
| :---: | :--- | :--- |
| **1** | Multi-Page HTML5 Website | 4 standalone HTML5 pages (`index.html`, `about.html`, `services.html`, `contact.html`) with consistent semantic markup, active nav highlights, and SEO tags. |
| **2** | CSS3 Styling & Design System | Unified CSS (`css/style.css`) using custom CSS variables matching official brand hex codes (`#2F5D50`, `#E9C46A`, `#F4F1EA`, `#264653`, `#FFFFFF`), Google Fonts (Playfair Display & Poppins), responsive layouts (CSS Grid + Flexbox). |
| **3** | Responsive Layouts | Mobile-first approach verified at 360px (mobile), 768px (tablet), and 1280px (desktop) with zero horizontal overflow and min 44px touch targets. |
| **4** | Navigation System | Semantic `<header>` and `<nav>` with brand logo, desktop menu, mobile hamburger toggle with smooth transition and accessibility attributes. |
| **5** | Home Page Components | Hero with "Spaces that feel like you", 6 service cards preview, animated stats, testimonial slider, FAQ accordion, dynamic Chennai weather widget. |
| **6** | About Page Components | 2018 heritage timeline, mission/vision, team of 14 highlights, 4 team profiles (Ananya Iyer, Rohit Menon, Sneha Pillai, Vijay Kumar), 250+ project stats. |
| **7** | Services Page Components | All 6 services with starting prices (₹4.5L, ₹1.2L, ₹65k, ₹3L, ₹15k, ₹80k), 4-step workflow (*Consult, Design, Build, Handover*), consultation trigger links. |
| **8** | Contact Page & Form Validation | 7 fields with real-time JS validation: Full Name (min 3 chars, letters/spaces), Email, Phone (10 digits starting 6–9), Service dropdown, Budget radio, Message (20–500 chars with live counter), Consent checkbox. Inline error messages, loading state, success message. |
| **9** | Interactive JavaScript Features | At least 5 vanilla JS interactions: (1) Hamburger menu, (2) Testimonial slider with controls, (3) Animated number counters, (4) FAQ accordion, (5) Back-to-top floating button, plus (6) Live character counter, and (7) Service category filter. |
| **10** | Public API Integration | Open-Meteo REST API (`https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707...`) fetching real-time Chennai weather with loading, success, error, and retry states. |
| **11** | Performance & SEO Optimization | Images compressed under 200 KB, native lazy loading, preconnected Google Fonts, unique meta descriptions, single `<h1>` per page, OpenGraph tags, semantic hierarchy. |
| **12** | Security & Best Practices | No unsafe `innerHTML` on user input; `textContent` sanitization; strict HTTPS; `rel="noopener noreferrer"` on external links; zero hardcoded secrets. |
| **13** | Documentation & Version Control | Comprehensive `README.md`, `docs/requirements.md`, `docs/sitemap.png`, `docs/testing-report.md`, `docs/security-checklist.md`, `.gitignore`, and Git repository setup. |
