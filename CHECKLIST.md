# MIT MSA Website - Development Checklist

## Overview

This checklist tracks the major tasks for creating the first working version of the MIT Muslim Students Association website. The website must be **fully static** (HTML, CSS, JS only) for hosting on MIT's Athena system.

---

## Phase 1: Project Setup & Architecture

- [x] **Initialize project structure**

  - [x] Create folder structure (`/src`, `/assets`, `/css`, `/js`)
  - [x] Set up CSS architecture (variables, reset, components, layouts)
  - [x] Create base HTML template with semantic structure
  - [x] Add favicon and meta tags for SEO/social sharing

- [x] **Establish coding standards**
  - [x] Create consistent naming conventions (BEM for CSS)
  - [x] Set up code organization guidelines
  - [x] Document component patterns for future contributors

---

## Phase 2: Design System & Styling

- [x] **Create design tokens/CSS variables**

  - [x] Color palette (primary, secondary, accent, neutrals)
  - [x] Typography scale (headings, body, captions)
  - [x] Spacing system (consistent margins/padding)
  - [x] Breakpoints for responsive design

- [x] **Build reusable CSS components**
  - [x] Buttons (primary, secondary, outline variants)
  - [x] Cards (for team members, resources, etc.)
  - [x] Navigation (header, mobile menu)
  - [x] Footer
  - [x] Section containers and layouts

---

## Phase 3: Core Pages

### Landing Page (Homepage)

- [x] Hero section with welcoming message and imagery
- [x] Brief "About MSA" introduction
- [x] Quick links to key information (prayer times, Jumu'ah, etc.)
- [x] Upcoming events highlight (static for now)
- [x] Call-to-action for mailing list signup
- [x] Instagram/social media integration or link

### About Page

- [x] MSA mission and values
- [x] History/background of MIT MSA
- [x] What we do / activities overview

### Prayer Spaces & Times Page

- [x] **Musalla location and details**
- [x] **Other prayer rooms on campus:**
  - [x] E52-112 (dedicated Muslim prayer room)
  - [x] E51-050 (non-denominational)
  - [x] E52-212 (non-denominational)
- [x] **Jumu'ah (Friday) prayers information:**
  - [x] Time: 1:15pm khutbah, 1:35pm prayers
  - [x] Location details
  - [x] Note about winter 'Asr prayers
  - [x] Arrival recommendations
  - [x] Charity collection info
- [x] Daily prayer times info (link to external source or static display)
- [x] Map or directions to prayer spaces

### Leadership Page

- [x] Chaplain information

### Resources Page

- [x] **On-campus resources:**
  - [x] Halal food options at MIT
  - [x] Wudu (ablution) facilities
- [x] **Community resources:**
  - [x] Local mosques and Islamic centers
  - [x] Halal restaurants nearby
- [x] **Useful links:**
  - [x] MIT Chaplaincy
  - [x] MSA National
  - [x] Prayer time calculators/apps
- [ ] Downloadable Muslim Guide (PDF link if available)

### Mailing List / Get Involved Page

- [x] Email signup form
  - [x] Integrate with mailing list service (e.g., embed Google Form, Mailchimp, or MIT's system)
  - [x] Clear value proposition for joining
- [x] Other ways to get involved
- [x] Contact information
- [x] Social media links (Instagram: @mitmsa)

### Contact Page (merged into Join page)

- [x] Contact form or email address
- [x] Social media links
- [ ] Office hours or meeting times (if applicable)

---

## Phase 4: Navigation & User Experience

- [x] **Header navigation**

  - [x] Logo/branding
  - [x] Main nav links
  - [x] Mobile-responsive hamburger menu

- [x] **Footer**

  - [x] Quick links
  - [x] Social media icons
  - [x] Copyright notice
  - [x] MIT affiliation acknowledgment

- [ ] **Mobile responsiveness**
  - [ ] Test all pages on mobile viewports
  - [ ] Ensure touch-friendly navigation
  - [ ] Optimize images for mobile

---

## Phase 5: Polish & Optimization

- [x] **Accessibility (a11y)**

  - [x] Semantic HTML throughout
  - [x] Alt text for all images
  - [x] Keyboard navigation support
  - [x] Sufficient color contrast (WCAG AA)
  - [x] ARIA labels where needed

- [x] **Performance**

  - [ ] Optimize images (compress, use appropriate formats)
  - [x] Minify CSS/JS for production
  - [ ] Lazy load images below the fold

- [ ] **Cross-browser testing**
  - [ ] Chrome, Firefox, Safari, Edge
  - [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## Phase 6: Content & Final Review

- [ ] **Gather and integrate actual content**

  - [ ] Finalize all copy/text
  - [ ] Obtain team member photos and bios
  - [ ] Verify all information is current and accurate

- [ ] **Final review**
  - [ ] Proofread all text
  - [ ] Check all links work
  - [ ] Validate HTML
  - [ ] Test all interactive elements

---

## Phase 7: Deployment

- [x] **Prepare for Athena hosting**

  - [x] Ensure all files are static (no server-side dependencies)
  - [x] Verify correct file paths (relative paths recommended)
  - [x] Test locally with a simple HTTP server

- [ ] **Deploy to MIT Athena**

  - [ ] Upload files to appropriate Athena directory
  - [ ] Set correct file permissions
  - [ ] Test live site thoroughly

- [ ] **Post-launch**
  - [ ] Document deployment process for future updates
  - [ ] Create maintenance guide

---

## Future Enhancements (Post-MVP)

_Not required for initial launch, but good to plan for:_

- [ ] Events calendar integration
- [ ] Dynamic prayer times API
- [ ] Blog/news section
- [ ] Photo gallery
- [ ] Multi-language support
- [ ] Dark mode toggle

---

## Technical Requirements Summary

| Requirement                     | Status   |
| ------------------------------- | -------- |
| Static files only (HTML/CSS/JS) | Required |
| Mobile responsive               | Required |
| Modern, clean design            | Required |
| Accessible (WCAG AA)            | Required |
| Cross-browser compatible        | Required |
| Maintainable code structure     | Required |
| MIT Athena compatible           | Required |

---

## Reference Links

- Old website: https://mit-msa.com/
- MIT MSA Instagram: https://www.instagram.com/mitmsa/
- MIT Events Calendar: https://calendar.mit.edu/group/muslim_students_association
- MSA National: https://www.msanational.org/

---

_Last updated: January 2026_
