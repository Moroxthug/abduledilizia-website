# Abdul Edilizia - Construction & Renovation Website

## Overview

This is a professional multi-page website for Abdul Edilizia, a construction and renovation company based in Muggiò (Monza e Brianza), serving the greater Milan area. The site functions as a digital business card and client acquisition tool, focusing on local SEO optimization and conversion-oriented design.

The application is built as a full-stack web application with a React-based frontend and Express backend, designed to showcase construction services, project portfolios, and facilitate customer contact through quote request forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server

**Routing**: Wouter for client-side routing - a lightweight alternative to React Router

**UI Component Library**: Shadcn/ui (New York style variant) built on Radix UI primitives with Tailwind CSS for styling

**State Management**: TanStack Query (React Query) for server state management and data fetching

**Form Handling**: React Hook Form with Zod for validation and @hookform/resolvers for schema integration

**Design System**:
- Typography: Inter for headings (font-heading), Open Sans for body text (font-sans)
- Color scheme: Neutral base with customizable HSL color system via CSS variables
- Spacing: Tailwind's utility-first approach with consistent padding/margin units
- Components: Card-based layouts with elevation effects (hover-elevate classes)

**Key Design Patterns**:
- Component composition with reusable cards (ServiceCard, ProjectCard, TestimonialCard)
- Scroll animations for progressive content reveal using IntersectionObserver
- SEO-optimized pages with dynamic meta tag management via SEOHead component
- Responsive mobile-first design with breakpoint-specific layouts

### Backend Architecture

**Runtime**: Node.js with TypeScript

**Framework**: Express.js for HTTP server and API routing

**Development Server**: Custom Vite integration in middleware mode for hot module replacement during development

**Storage Interface**: Abstracted storage layer with IStorage interface, currently implemented as in-memory storage (MemStorage class) but designed to be swapped with database implementations

**Build Process**:
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM module
- Development: tsx for TypeScript execution with hot reload

**Static File Serving**: Vite middleware in development, static serving in production from `dist/public`

### Page Structure & Routing

**Core Pages**:
- Home (`/`) - Hero, services overview, portfolio highlights, testimonials
- Chi Siamo (`/chi-siamo`) - Company values and history
- Servizi (`/servizi`) - Services overview with detailed sub-pages
- Portfolio (`/portfolio`) - Project gallery with filtering
- Contatti (`/contatti`) - Contact form and business information

**Service Sub-Pages** (SEO-optimized):
- `/servizi/ristrutturazioni-complete`
- `/servizi/bagni`, `/servizi/cucine`
- `/servizi/tetti`, `/servizi/facciate`, `/servizi/impianti`
- `/servizi/ponteggi`, `/servizi/smaltimento`

**City-Specific Pages** (Local SEO strategy):
- `/citta/monza`, `/citta/milano`, `/citta/bergamo`, `/citta/brescia`, `/citta/como`
- `/citta/alessandria`, `/citta/valenza`
- `/citta/sesto-san-giovanni`, `/citta/cinisello-balsamo`
- `/citta/desio`, `/citta/seregno`

Each city page features:
- Unique H1 and title tags with city name
- Schema.org LocalBusiness markup with `areaServed` targeting
- Custom content placeholders for local references
- Geo-targeted Google Maps integration

### SEO Strategy

**On-Page Optimization**:
- Dynamic meta tags (title, description, keywords, canonical URLs)
- Open Graph protocol for social sharing
- Schema.org structured data (LocalBusiness type)
- Semantic HTML with proper heading hierarchy
- Italian language content (`lang="it"`)

**Local SEO Focus**:
- City-specific landing pages with unique content
- Location-based keywords throughout site
- Business address and contact information prominently displayed
- Service area clearly defined (Muggiò, Monza, Brianza, Milano)

**Content Strategy**:
- Emphasis on "economiche" (economical) + "alta qualità" (high quality) positioning
- Clear value proposition: competitive prices with premium materials
- Trust signals: experience years, completed projects, client testimonials

## External Dependencies

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Shadcn/ui Components**: Pre-built accessible components from Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: CVA for component variant styling
- **tailwind-merge**: Intelligent Tailwind class merging utility

### Forms & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod integration with React Hook Form

### Database & ORM
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon Database)
- **drizzle-zod**: Integration between Drizzle and Zod schemas
- **drizzle-kit**: CLI tools for migrations and schema management

Database configuration points to PostgreSQL via `DATABASE_URL` environment variable, with schema defined in `shared/schema.ts` and migrations in `./migrations` directory.

### Development Tools
- **Vite**: Build tool and dev server with HMR
- **@vitejs/plugin-react**: React Fast Refresh support
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development
- **@replit/vite-plugin-***: Replit-specific development plugins (runtime error overlay, cartographer, dev banner)

### Fonts
- **Google Fonts**: Inter (headings), Open Sans (body text) loaded via CDN

### Assets
- Images stored in `attached_assets` directory
- Generated placeholder images for portfolio and service showcases
- Company logo asset referenced from attached_assets

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (configured but sessions not actively used in current implementation)

### Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **clsx**: Conditional className utility
- **cmdk**: Command menu component library
- **embla-carousel-react**: Carousel/slider component