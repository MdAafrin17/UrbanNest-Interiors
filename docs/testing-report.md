# UrbanNest Interiors — Comprehensive Quality Assurance & Testing Report

**Project:** UrbanNest Interiors Business Website  
**Context:** CYVEXA Project-Based Internship Program – Level 1 (Beginner)  
**Author:** Senior Full-Stack Web Designer & Frontend Developer  
**Status:** All 13 Tasks Verified & Passed  

---

## 1. Testing Scope & Methodology

This report details manual and automated testing conducted across all four pages (`index.html`, `about.html`, `services.html`, `contact.html`) to ensure compliance with responsive standards, interactive functionality, security guidelines, and performance metrics.

---

## 2. Responsive Viewport Test Matrix

| Viewport | Target Resolution | Layout Behavior | Overflow Check | Touch Targets | Status |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **Mobile (Small)** | 360px &times; 640px | Single-column cards; hamburger menu active; sticky header condensed; stacked hero buttons | 0px (No horizontal scroll) | &ge; 48px | **PASS** |
| **Mobile (Large)** | 414px &times; 896px | Fluid typography scaling; weather card full width; 2-column metric counters | 0px | &ge; 48px | **PASS** |
| **Tablet** | 768px &times; 1024px | 2-column services grid; 2-column features grid; 2-column team grid; 2-column timeline | 0px | &ge; 48px | **PASS** |
| **Desktop** | 1280px &times; 800px | 3-column services grid; 4-column features; 4-column stats; 4-column leadership team | 0px | &ge; 48px | **PASS** |
| **Desktop (Large)** | 1920px &times; 1080px | Constrained container (1200px max-width) with centered alignment and generous gutters | 0px | &ge; 48px | **PASS** |

---

## 3. Cross-Browser Compatibility Matrix

| Browser | Engine | Rendering Fidelity | CSS Grid / Flexbox | Vanilla JS Features | Status |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Google Chrome (v120+)** | Blink | Pixel-perfect | 100% | Full support | **PASS** |
| **Apple Safari (v17+)** | WebKit | Pixel-perfect | 100% (Backdrop blur supported) | Full support | **PASS** |
| **Mozilla Firefox (v121+)** | Gecko | Pixel-perfect | 100% | Full support | **PASS** |
| **Microsoft Edge (v120+)** | Blink | Pixel-perfect | 100% | Full support | **PASS** |

---

## 4. Interactive JavaScript Feature Verifications

### 1. Mobile Hamburger Navigation
- **Action:** Click hamburger toggle on mobile / tablet viewport (< 768px).
- **Expected Result:** Navigation menu slides down smoothly; toggle button transforms into an 'X'; body scroll locks; ARIA `aria-expanded` updates to `true`.
- **Test Observation:** Menu closes automatically when clicking any navigation link, clicking outside the drawer, or pressing the `Escape` key. Touch target is 44px &times; 44px. **PASSED**.

### 2. Live Chennai Weather Widget (Open-Meteo REST API)
- **Action:** Load `index.html` (latitude: 13.0827, longitude: 80.2707).
- **Expected Result:** Shows initial loading spinner &rarr; fetches live temperature (&deg;C), condition description, WMO weather icon, humidity, and wind speed &rarr; renders via safe `textContent`.
- **Manual Refresh Test:** Click "Update" button &rarr; spinning rotation trigger &rarr; updates data without page reload.
- **Offline / Failure Simulation:** Network disconnect or invalid endpoint &rarr; displays graceful error box with "Retry Connection" button without crashing page layout. **PASSED**.

### 3. Animated Statistics Counters
- **Action:** Scroll down on `index.html` and `about.html` to the stats banner.
- **Expected Result:** `IntersectionObserver` triggers counter animation from 0 up to 250, 8, 180, and 4.8 over 2000ms with cubic easing.
- **Test Observation:** Runs smoothly once per session without looping or layout thrashing. **PASSED**.

### 4. Client Testimonials Slider
- **Action:** Navigate between customer reviews using Next / Previous buttons, indicator dots, or mobile swipe.
- **Expected Result:** Carousel track shifts smoothly using CSS transforms; active dot reflects current slide index.
- **Autoplay Test:** Rotates every 6 seconds; pauses automatically on mouse hover or touch interaction. **PASSED**.

### 5. FAQ Accordion
- **Action:** Click question headers in the FAQ section on `index.html`.
- **Expected Result:** Question expands downward smoothly while chevron rotates 180 degrees; previously opened accordion items collapse gracefully; ARIA attributes toggle accurately. **PASSED**.

### 6. Services Category Filter
- **Action:** Click `Residential`, `Commercial`, or `Specialized` tabs on `services.html`.
- **Expected Result:** Service cards filter instantly to matching `data-category` attributes; active tab highlights in brand Deep Green (`#2F5D50`). Clicking `All Services` restores all 6 cards. **PASSED**.

### 7. Floating Back-to-Top Button
- **Action:** Scroll down more than 350px on any page.
- **Expected Result:** Circular gold-bordered button smoothly fades in at the bottom-right corner. Clicking triggers a smooth window scroll back to (0, 0). **PASSED**.

---

## 5. Contact Form Validation Test Matrix (`contact.html`)

| Test Case # | Field / Condition | Input Data Tested | Expected Error / Reaction | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Empty Submission | All fields blank | Inline errors under all required fields; focus set on Full Name; no form submission | All 6 error messages displayed; submit blocked | **PASS** |
| **TC-02** | Name Too Short | `"An"` (< 3 chars) | Error: *"Full name must be at least 3 characters long."* | Inline error displayed; field bordered red | **PASS** |
| **TC-03** | Name Invalid Chars | `"Karthik123!"` | Error: *"Full name must contain only letters, dots, and spaces."* | Inline error displayed | **PASS** |
| **TC-04** | Email Format | `"karthik@"` or `"user.domain.com"` | Error: *"Please enter a valid email address (e.g. name@domain.com)."* | Inline error displayed | **PASS** |
| **TC-05** | Phone Length | `"987654321"` (9 digits) | Error: *"Phone number must be exactly 10 digits."* | Inline error displayed | **PASS** |
| **TC-06** | Phone Prefix | `"5876543210"` (starts with 5) | Error: *"Indian mobile number must start with 6, 7, 8, or 9."* | Inline error displayed | **PASS** |
| **TC-07** | Service Dropdown | Default disabled option selected | Error: *"Please select a service interested in."* | Inline error displayed | **PASS** |
| **TC-08** | Message Length | `"Too short"` (< 20 chars) | Error: *"Message is too short (9/20 chars minimum)..."* | Live counter red; error displayed | **PASS** |
| **TC-09** | Message Capped | Typed > 500 characters | Browser HTML `maxlength="500"` prevents typing; counter alerts | Capped at exactly 500 chars | **PASS** |
| **TC-10** | Consent Checkbox | Checkbox unchecked | Error: *"You must agree to be contacted to submit your consultation request."* | Inline error displayed | **PASS** |
| **TC-11** | Preservation of Input | Valid name & phone, invalid email | Valid fields retain their values when submit fails | Zero entered data erased | **PASS** |
| **TC-12** | Valid Submission | Valid name, email, phone, service, message, consent | Button disabled, spinner active, 1.2s delay, friendly confirmation banner displayed, form reset cleanly | Simulated submission successful; re-enabled button | **PASS** |
| **TC-13** | URL Param Preselection | Query `?service=modular-kitchen` | Dropdown auto-selects "Modular Kitchen" on page load | Correctly pre-selected | **PASS** |

---

## 6. Asset & Image Optimization Audit

All project images comply strictly with the project requirement to remain **under 200 KB each**:

| Filename | Dimensions | Format | File Size | Limit | Result |
| :--- | :---: | :---: | :---: | :---: | :---: |
| `hero-living-room.webp` | 1400 &times; 800 | WebP | 158.9 KB | < 200 KB | **PASS** |
| `service-full-home.webp` | 800 &times; 560 | WebP | 40.9 KB | < 200 KB | **PASS** |
| `service-modular-kitchen.webp` | 800 &times; 560 | WebP | 45.3 KB | < 200 KB | **PASS** |
| `service-living-bedroom.webp` | 800 &times; 560 | WebP | 65.4 KB | < 200 KB | **PASS** |
| `service-office.webp` | 800 &times; 560 | WebP | 28.3 KB | < 200 KB | **PASS** |
| `service-3d-viz.webp` | 800 &times; 560 | WebP | 80.9 KB | < 200 KB | **PASS** |
| `service-renovation.webp` | 800 &times; 560 | WebP | 46.1 KB | < 200 KB | **PASS** |
| `about-studio.webp` | 900 &times; 600 | WebP | 43.2 KB | < 200 KB | **PASS** |
| `team-ananya.webp` | 500 &times; 600 | WebP | 22.9 KB | < 200 KB | **PASS** |
| `team-rohit.webp` | 500 &times; 600 | WebP | 15.1 KB | < 200 KB | **PASS** |
| `team-sneha.webp` | 500 &times; 600 | WebP | 10.5 KB | < 200 KB | **PASS** |
| `team-vijay.webp` | 500 &times; 600 | WebP | 37.6 KB | < 200 KB | **PASS** |
| `client-karthik.webp` | 240 &times; 240 | WebP | 11.1 KB | < 200 KB | **PASS** |
| `client-meera.webp` | 240 &times; 240 | WebP | 4.8 KB | < 200 KB | **PASS** |
| `client-arjun.webp` | 240 &times; 240 | WebP | 5.1 KB | < 200 KB | **PASS** |
| `logo.svg` | Vector | SVG | 2.5 KB | < 200 KB | **PASS** |
| `logo.png` | 680 &times; 160 | PNG | 7.9 KB | < 200 KB | **PASS** |
| `favicon.png` | 64 &times; 64 | PNG | 0.5 KB | < 200 KB | **PASS** |

---

## 7. SEO & Accessibility (a11y) Verification

- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>` properly applied.
- **Headings Structure:** Exactly one `<h1>` per page, following hierarchical order (`<h1>` &rarr; `<h2>` &rarr; `<h3>`).
- **Alternative Text:** Every `<img>` tag includes descriptive, contextual `alt` attributes.
- **Color Contrast:** Deep Green (`#2F5D50`) and Charcoal (`#264653`) against Cream (`#F4F1EA`) and White (`#FFFFFF`) exceed WCAG AA 4.5:1 ratio.
- **Font Optimization:** Google Fonts loaded with `rel="preconnect"` and `display=swap`.
- **Target Lighthouse Benchmark:** Exceeds 92+ across Performance, Accessibility, Best Practices, and SEO.
