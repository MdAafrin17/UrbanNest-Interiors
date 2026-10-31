# UrbanNest Interiors — Wireframes & UI Architecture Guide

This document illustrates the responsive wireframes and layout grids across Desktop (1280px+), Tablet (768px), and Mobile (360px) viewports for all four pages.

---

## Global Design Token System

- **Primary Colors:** Deep Green (`#2F5D50`), Warm Gold (`#E9C46A`), Cream (`#F4F1EA`), Charcoal (`#264653`), White (`#FFFFFF`).
- **Typography:**
  - Headings: `Playfair Display`, serif (400, 600, 700)
  - Body: `Poppins`, sans-serif (300, 400, 500, 600)
- **Container Max-Width:** 1200px with 24px/16px gutters.
- **Elevation:** Subtle layered shadows (`0 10px 30px rgba(47, 93, 80, 0.08)`).
- **Target Touch Targets:** Minimum 44px &times; 44px on interactive elements.

---

## 1. Home Page Wireframe (`index.html`)

### Desktop View (1280px)
```
+--------------------------------------------------------------------------------+
| [LOGO: UrbanNest]              Home   About   Services   Contact   [Book Call] |
+--------------------------------------------------------------------------------+
| HERO SECTION                                                                   |
| [Subhead: BESPOKE INTERIOR ARCHITECTURE]                                       |
| H1: Spaces that feel like you.                                                 |
| Text: Elevating homes and workspaces across Chennai with timeless aesthetic... |
| [Book Free Consultation]   [Explore Services]                                  |
|                                                                                |
| +----------------------------------------------------------------------------+ |
| | WEATHER WIDGET: Chennai (Open-Meteo API) | 30°C Sunny | Humidity: 68%      | |
| +----------------------------------------------------------------------------+ |
+--------------------------------------------------------------------------------+
| FEATURED SERVICES (3x2 Grid)                                                   |
| [Card 1: Full Home]       [Card 2: Modular Kitchen]  [Card 3: Living & Bed]    |
| [Card 4: Office Space]    [Card 5: 3D Visualization] [Card 6: Renovation]      |
+--------------------------------------------------------------------------------+
| WHY CHOOSE URBANNEST (4 Column Grid)                                           |
| [Icon] 8+ Years          [Icon] Turnkey Delivery   [Icon] Transparent Pricing  |
+--------------------------------------------------------------------------------+
| LIVE METRIC COUNTERS                                                           |
|    [ 250+ ] Projects  |  [ 8 ] Years  |  [ 180+ ] Families  |  [ 4.8/5 ] Stars |
+--------------------------------------------------------------------------------+
| CLIENT TESTIMONIAL SLIDER                                                      |
|   < [ "UrbanNest transformed our Anna Nagar apartment into our dream home..." ] >
+--------------------------------------------------------------------------------+
| FREQUENTLY ASKED QUESTIONS (Accordion)                                         |
| [+] How does the design consultation work?                                     |
| [+] What is the typical timeline for a 3BHK interior project?                  |
| [+] Are there hidden costs in the quotation?                                   |
+--------------------------------------------------------------------------------+
| FOOTER: Brand Info | Quick Links | Services | Studio Contact | Credits         |
+--------------------------------------------------------------------------------+
```

### Mobile View (360px)
```
+-------------------------------+
| [LOGO]                    [=] | (Hamburger Menu)
+-------------------------------+
| HERO                          |
| H1: Spaces that feel like you.|
| [CTA: Book Consultation]      |
|                               |
| [ Chennai Weather Card ]      |
+-------------------------------+
| SERVICES (Stacked 1-Col)      |
| [Card 1: Full Home Interiors] |
| [Card 2: Modular Kitchen]     |
| [Card 3: Living & Bedroom]    |
| [Card 4: Office Interiors]    |
| [Card 5: 3D Visualization]    |
| [Card 6: Renovation Makeover] |
+-------------------------------+
| STATS (2x2 Grid)              |
| [250+] Projects [8] Years     |
| [180+] Families [4.8/5] Rating|
+-------------------------------+
| TESTIMONIAL (Swipeable Card)  |
| [Quote + Client Details]      |
| [< Prev]            [Next >]  |
+-------------------------------+
| ACCORDION FAQ                 |
+-------------------------------+
| FOOTER (Stacked 1-Col)        |
+-------------------------------+
```

---

## 2. About Page Wireframe (`about.html`)

```
+--------------------------------------------------------------------------------+
| [NAVBAR: Logo + Menu + CTA]                                                    |
+--------------------------------------------------------------------------------+
| PAGE HEADER: Crafting Soulful Spaces Since 2018                                |
| Subhead: Discover the vision, craft, and people behind UrbanNest Interiors.   |
+--------------------------------------------------------------------------------+
| STORY & HERITAGE (2-Column Grid: Text + Editorial Image)                       |
| Founded in Anna Nagar, Chennai... grew from 2 passionate architects to team 14 |
+--------------------------------------------------------------------------------+
| MISSION & VISION (2 Cards: Deep Green Accent)                                  |
| [Card 1: Our Mission]                 [Card 2: Our Vision]                     |
+--------------------------------------------------------------------------------+
| LEADERSHIP TEAM (4 Profile Cards)                                              |
| [Ananya Iyer]        [Rohit Menon]      [Sneha Pillai]      [Vijay Kumar]      |
| Founder & Principal  Head of Projects   Senior Visualizer   Site Operations    |
+--------------------------------------------------------------------------------+
| STATS & CREDENTIALS STRIP                                                      |
| 250+ Projects | 8 Years | 180+ Happy Families | 4.8/5 Rating                   |
+--------------------------------------------------------------------------------+
| CLIENT ENDORSEMENT SPOTLIGHT                                                   |
+--------------------------------------------------------------------------------+
| [FOOTER]                                                                       |
+--------------------------------------------------------------------------------+
```

---

## 3. Services Page Wireframe (`services.html`)

```
+--------------------------------------------------------------------------------+
| [NAVBAR: Logo + Menu + CTA]                                                    |
+--------------------------------------------------------------------------------+
| PAGE HEADER: Comprehensive Interior Solutions                                  |
| Subhead: Transparent starting prices, end-to-end execution, and 1-yr guarantee.|
+--------------------------------------------------------------------------------+
| CATEGORY FILTER TABS: [All] [Residential] [Commercial] [Specialized]           |
+--------------------------------------------------------------------------------+
| 6 SERVICE CARDS (3x2 Desktop / 2x1 Tablet / 1x1 Mobile)                         |
| 1. Full Home Interiors     - ₹4,50,000  [Book Consultation]                   |
| 2. Modular Kitchen         - ₹1,20,000  [Book Consultation]                   |
| 3. Living & Bedroom Design - ₹65,000    [Book Consultation]                   |
| 4. Office Interiors        - ₹3,00,000  [Book Consultation]                   |
| 5. 3D Design & Viz         - ₹15,000    [Book Consultation]                   |
| 6. Renovation & Makeover   - ₹80,000    [Book Consultation]                   |
+--------------------------------------------------------------------------------+
| 4-STEP EXECUTION FRAMEWORK (Progress Line)                                     |
| [1. CONSULT]   --->   [2. DESIGN]   --->   [3. BUILD]   --->   [4. HANDOVER]   |
| 30-min discovery       3D & layout         Weekly updates       1-yr support   |
+--------------------------------------------------------------------------------+
| CALL TO ACTION BANNER                                                          |
| Ready to bring your dream space to life? [Schedule Free Consultation]          |
+--------------------------------------------------------------------------------+
| [FOOTER]                                                                       |
+--------------------------------------------------------------------------------+
```

---

## 4. Contact Page Wireframe (`contact.html`)

```
+--------------------------------------------------------------------------------+
| [NAVBAR: Logo + Menu + CTA]                                                    |
+--------------------------------------------------------------------------------+
| PAGE HEADER: Get In Touch With Our Design Studio                               |
| Subhead: Visit our Anna Nagar design studio or send us your space details.     |
+--------------------------------------------------------------------------------+
| 2-COLUMN CONTACT LAYOUT                                                        |
| LEFT COLUMN: STUDIO INFO & MAP         | RIGHT COLUMN: INQUIRY FORM            |
| • Address: 12 Lake View Rd, Anna Nagar | [Full Name: letters & spaces, min 3]  |
| • Phone: +91 90000 00000               | [Email Address: valid format]         |
| • Email: hello@urbannest-interiors...  | [Phone Number: 10-digit, starts 6-9]  |
| • Hours: Mon-Sat 9:30 AM - 7:00 PM     | [Service: Select from 6 Services]     |
|                                        | [Budget: ( ) <1L ( ) 1-5L ( ) >5L]    |
| [Embedded Google Map: Anna Nagar]      | [Message: 20-500 chars (Counter: 0)]  |
| [Social Links: IG, FB, LI, Pinterest]  | [x] Consent to be contacted           |
|                                        | [Submit Inquiry Button] (States)      |
+--------------------------------------------------------------------------------+
| [FOOTER]                                                                       |
+--------------------------------------------------------------------------------+
```
