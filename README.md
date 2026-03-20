<div align="center">

<img src="public/logo.svg" alt="Nodio" width="200" />

<br />
<br />

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Early%20Development-yellow?style=flat-square)]()
[![Waitlist](https://img.shields.io/badge/Waitlist-Open-4ade80?style=flat-square)](https://nodio.me)
[![Next.js](https://img.shields.io/badge/Next.js-14-white?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://typescriptlang.org)

[nodio.me](https://nodio.me) · [Join Waitlist](https://nodio.me/#waitlist)

</div>

---

Nodio distributes your files across a network of contributor nodes. Files are split into encrypted chunks, replicated across multiple nodes, and served from wherever is closest. If a node goes offline, chunks rebalance automatically.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                     Client                       │
└───────────────────────┬─────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────┐
│                   Coordinator                     │
│   ┌─────────────────┐   ┌─────────────────────┐  │
│   │  Chunk Router   │   │   Health Monitor    │  │
│   └────────┬────────┘   └──────────┬──────────┘  │
└────────────┼───────────────────────┼──────────────┘
             │                       │
    ┌────────▼───────────────────────▼────────┐
    │   [Node A]   [Node B]   [Node C]  ...   │
    └──────────────────┬───────────────────────┘
                       │ fallback
              ┌────────▼────────┐
              │  Cloudflare R2   │
              └─────────────────┘
```

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, Tailwind CSS, TypeScript |
| Backend | Node.js, Express |
| Database | MongoDB |
| Fallback storage | Cloudflare R2 |

## Running locally

```bash
git clone https://github.com/SanyamSuyal/Nodio
cd Nodio
npm install
npm run dev
```

## License

MIT © [Sanyam Suyal](https://github.com/SanyamSuyal)
