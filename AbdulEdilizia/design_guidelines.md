# Design Guidelines - Abdul Edilizia Website

## Design Approach
**Reference-Based + Industry-Specific**: Professional construction/renovation company website drawing inspiration from premium B2B service providers with emphasis on trust, credibility, and local expertise.

## Core Design Principles
1. **Minimalismo Professionale**: Clean, essential design that conveys authority and competence
2. **Credibilità Locale**: Strong emphasis on local presence in Muggiò/Monza/Milano/Brianza area
3. **Conversion-Focused**: Every page designed to guide users toward contact/preventivo request
4. **SEO-First Architecture**: Optimized for local search visibility

## Typography System
- **Headings**: Professional sans-serif (e.g., Inter, Raleway) - weights 600-700
- **Body**: Readable sans-serif (e.g., Open Sans, Lato) - weight 400, line-height 1.6
- **Hierarchy**: 
  - H1: 2.5rem to 3.5rem (hero statements)
  - H2: 2rem to 2.5rem (section titles)
  - H3: 1.5rem to 1.75rem (service categories)
  - Body: 1rem to 1.125rem

## Layout System
- **Spacing Units**: Tailwind units 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-7xl with px-4 md:px-6 lg:px-8
- **Section Padding**: py-16 md:py-20 lg:py-24
- **Grid System**: 12-column responsive grid for flexibility

## Component Library

### Navigation
- Clean header with logo (Abdul Edilizia), centered navigation links, prominent "Richiedi Preventivo" CTA button
- Sticky on scroll for easy access
- Mobile: Hamburger menu

### Hero Section
- Full-width impactful hero with high-quality construction/renovation imagery
- Overlay with company name, tagline emphasizing local expertise
- Primary CTA: "Richiedi Preventivo Gratuito" with blurred background
- Secondary info: Location badge "Muggiò - Monza e Brianza"

### Service Cards
- 2-column (md) to 3-column (lg) grid layout
- Icon + Title + Brief Description + "Scopri di più" link
- Services: Ristrutturazioni Complete, Bagni, Cucine, Tetti, Facciate, Impianti

### Project Gallery/Portfolio
- Masonry or grid layout showcasing before/after images
- Project cards with: Image, Project Type, Location, Brief Description
- Lightbox functionality for image viewing

### Contact Forms
- Clean, structured form: Nome, Email, Telefono, Tipo Servizio (select), Messaggio
- Clear privacy policy acceptance checkbox
- Prominent submit button

### Trust Elements
- Testimonial cards with client photo/initial, quote, name, location
- Certification badges (if applicable)
- "Anni di Esperienza" / "Progetti Completati" stats

### Footer
- 3-column layout: Company Info (address, P.IVA, contacts), Quick Links, Social Media
- Copyright notice
- Clean, organized information architecture

## Images Strategy
**Hero Section**: YES - Large, high-quality hero image showing professional renovation work
**Additional Images**: 
- Service section: Icon-based (no photos)
- Portfolio section: Multiple project photos in grid/masonry
- About section: Team/company photo if available
- Testimonials: Client initials/avatars

## Page-Specific Guidelines

### Homepage
- Hero with strong value proposition
- 6-service grid highlighting core offerings
- Brief "Chi Siamo" intro
- Featured projects (3-4 cards)
- Testimonials (2-3)
- Final CTA section before footer

### Servizi Page
- Service-specific hero
- Detailed service descriptions with imagery
- Process timeline/steps
- CTA for each service type

### Portfolio/Progetti
- Filter by project type
- Grid of completed projects with details
- Case study format for featured projects

### Contatti
- 2-column: Contact form + Company information
- Google Maps integration for Via Aldo Moro 6, Muggiò
- All contact details clearly displayed

### Chi Siamo
- Company story and values
- Local expertise emphasis
- Team presentation (if applicable)
- Certifications and partnerships

## SEO Implementation Requirements
- Meta titles and descriptions for each page with local keywords
- Schema.org LocalBusiness markup with complete company data
- Optimized heading hierarchy (H1-H3)
- Alt text for all images describing renovation work
- Internal linking structure

## Performance & Technical
- Lazy loading for images
- Optimized image formats (WebP with fallbacks)
- Minimal JavaScript - progressive enhancement
- Mobile-first responsive design
- Fast loading times priority

## Local SEO Focus
Emphasize throughout: Muggiò, Monza, Milano, Brianza geographic keywords integrated naturally into content and metadata.