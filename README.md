<p align="center">
    <img src="public/logo.svg" alt="Nodio logo" width="320" />
</p>

<h1 align="center">Nodio</h1>

<p align="center">
    Privacy-first, distributed cloud storage with encrypted chunks, resilient replication, and edge-aware delivery.
</p>

<p align="center">
    <a href="https://github.com/Nodio-Labs/Nodio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-0f172a?style=for-the-badge" alt="MIT License" /></a>
    <a href="https://nodio.me"><img src="https://img.shields.io/badge/Status-Early%20Access-eab308?style=for-the-badge" alt="Early Access" /></a>
    <a href="https://nodio.me/#waitlist"><img src="https://img.shields.io/badge/Waitlist-Open-22c55e?style=for-the-badge" alt="Waitlist Open" /></a>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-Database-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
</p>

<p align="center">
    <a href="https://nodio.me">Website</a>
    ·
    <a href="https://nodio.me/#waitlist">Join the Waitlist</a>
    ·
    <a href="https://github.com/Nodio-Labs/Nodio/issues">Report an Issue</a>
</p>

## Overview

Nodio is building a modern storage layer for teams that care about privacy, reliability, and global performance. Instead of relying on one centralized region, Nodio distributes encrypted file chunks across a contributor-powered network so data remains available, durable, and fast to retrieve.

This repository contains the public web experience for Nodio, including the product landing page, waitlist flow, contributor sign-up flow, and programmatic SEO content pages.

## Why Nodio

- End-to-end privacy posture: files are split into encrypted chunks before distribution.
- Resilient by design: replication and rebalancing reduce single-point failures.
- Faster delivery potential: edge-aware distribution improves geographic proximity.
- Community-powered infrastructure: contributors can participate in storage capacity.

## Product Surface In This Repository

- Primary marketing website and brand narrative.
- Waitlist submission API and contributor submission API.
- Programmatic SEO blog routes and static metadata routes.
- Production-ready Next.js App Router setup.

## Technology

| Area | Stack |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data | MongoDB |
| Analytics | Vercel Analytics |
| Runtime | Node.js |

## Local Development

### 1) Clone and install

```bash
git clone https://github.com/Nodio-Labs/Nodio.git
cd Nodio
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=nodio
```

### 3) Start the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/waitlist` | Adds a validated email to the waitlist collection |
| POST | `/api/contributors` | Adds a validated email to the contributors collection |

Both endpoints validate email format, reject duplicates, and return meaningful HTTP status codes.

## SEO and Content

Nodio uses a structured SEO setup with:

- Dynamic SEO routes for topic pages.
- Dedicated `robots` and `sitemap` routes.
- Long-form educational pages for storage-related search intent.

## Quality Standards

- Clear, human-centered product messaging.
- High-resolution brand presentation suitable for retina and 4K displays.
- Professional, maintainable TypeScript and App Router conventions.

## Contributing

Contributions are welcome. For substantial changes, open an issue first so we can align on scope and implementation details.

## License

MIT License.
