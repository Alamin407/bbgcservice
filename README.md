# BBGC — Business & Technology Consultancy

A responsive redesign of BBGC’s public website, built with Next.js App Router, React, TypeScript, PostgreSQL, and Drizzle ORM.

## Run locally

1. Install the dependencies with `npm install`.
2. Configure `DATABASE_URL` in `.env` for the application’s PostgreSQL database.
3. Apply the schema with `npx drizzle-kit push`. The included Drizzle configuration targets the local sandbox database; configure its `dbCredentials.url` for another environment.
4. Start development with `npm run dev`.

For a production build, run `npx next typegen`, `npm exec tsc -- --noEmit`, and `npm run build`.

## Site structure

- `/` — featured capabilities, company overview, services, industries, and company story.
- `/about-us` — company profile and filterable international offices.
- `/services` and `/services/[slug]` — four capabilities with expandable details and contextual contact links.
- `/industries` and `/industries/[slug]` — specialist sectors and related services.
- `/insights` and `/insights/[slug]` — searchable company announcements and source links.
- `/careers` — hiring process and BBGC’s official Workable opportunities.
- `/contact-us` — an enquiry form, direct contact options, and office map links.

Legacy resource and announcement URLs redirect to the new pages. Company policies link to BBGC’s published policy documents.

## Forms and storage

`POST /api/enquiries` validates the submitted fields, checks consent, and saves an enquiry to `bbgc_enquiries`. The success screen shows a unique reference based on that record. Service-page links preselect the relevant enquiry topic.

`POST /api/newsletter` saves a validated, normalised email address to `bbgc_subscribers`. Duplicate subscriptions are handled idempotently by a unique database constraint.

Both endpoints are server-side only for database access. There is no public endpoint for listing enquiries or subscribers. Submissions are stored in this application’s database; no external CRM or outbound email provider is configured. For ongoing operations, connect a trusted internal workflow to review enquiries and manage consent-based newsletter delivery.

`GET /api/health` verifies the database connection.

## Content and assets

Service, industry, office, and contact content lives in `src/lib/content.ts`. Company announcements and their original sources are in `src/lib/insights.ts`.

The London hero is an original architectural illustration generated for this redesign. Supporting media is stored locally from BBGC’s existing site, Pexels (Ar kay, panumas nikhomkhai, Haberdoedas Photography), and Unsplash. DM Sans is served locally, so the site does not depend on a third-party font request.

## Accessibility and responsive behaviour

The interface includes visible keyboard focus, a skip link, accessible form labels, reduced-motion support, keyboard-operable navigation, and user-controlled rather than automatically rotating hero features. Layouts adapt from wide desktop displays to narrow mobile screens.
# bbgcservice
# bbgcservice
