# Grocerace

_Grocerace_ is a real-time collaborative shopping list app built as a **portfolio-driven project**. The goal is to demonstrate practical frontend skills using modern technologies, and to explore backend fundamentals.

I hate shopping, so I want it over with as fast as possible. This app is a mix of problem-solving and showing off what I can do.

## Project Status

This is a **work in progress** and still under active development. Many features are missing or incomplete. Expect rough edges, placeholder UI, and untested logic.


## Tech Stack

This project uses tools and patterns chosen primarily to reflect professional frontend development practices. Backend is intentionally minimal.

### Frontend

- [Nuxt3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/) with `<script setup>`
- [TypeScript](https://www.typescriptlang.org/)
- [UnoCSS](https://github.com/unocss/unocss) utility-first styling
- [Socket.IO](https://socket.io/) for real-time updates
- [PNPM workspaces](https://pnpm.io/workspaces) for monorepo structure

### Backend

- [Express.js](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [TypeScript](https://www.typescriptlang.org/)
- No database (yet)


## Monorepo Structure
├─ app → frontend client (Vue 3)<br>
├─ server → backend API (Express + Socket.IO)<br>
├─ shared → shared types/utils

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Ziomeka/grocerace.git
cd grocerace
pnpm install
```

### Run the server
```bash
cd packages/server
pnpm dev
```

The backend will start at http://localhost:3001

### Run the frontend
In a separate terminal:

```bash
cd packages/app
pnpm dev
```

The frontend will start at http://localhost:3000

## Features

* [x] Real-time collaborative list updates
* [x] Auto-generated or manually joined list IDs
* [x] Author name saved in browser settings
* [x] Shared types between client and server
* [ ] Delete items
* [ ] Add item status updates - looking for item, in the cart
* [ ] Pointing system to add some gamification
* [ ] Copy list ID to clipboard
* [ ] List persistence (no DB yet)
* [ ] Login / authentication
* [ ] Multiple saved lists per user

## To Do

* [ ] Save and restore list data (DB integration)
* [ ] Add unit tests (Vitest)
* [ ] Add error handling
* [ ] Add loading states
* [ ] Move all txt into i18n
* [ ] Production build & deployment 


## 📄 License

MIT – use freely, build your own, improve it if you want 😊

