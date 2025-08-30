# Sports Heads Football Championship (Monorepo Skeleton)

A production-oriented scaffold for a multiplayer arcade soccer game with AI, real-time play, and modern infra.

## Quick Start (Local Dev)
- Requirements: Node 20+, Python 3.10+, Docker (optional)
- Client: `cd client && npm install && npm run dev`
- Server: `cd server && npm install && npm run dev`
- AI Service: `cd ai-service && pip install -r requirements.txt && uvicorn main:app --reload`

Or via Docker Compose:
```
docker compose up --build
```

## Packages/Services
- `client` – React + TS + Vite
- `server` – Node/Express + TS + Socket.io
- `game-engine` – Shared TypeScript engine stubs
- `ai-service` – FastAPI service with stub agents
- `matchmaker` – Simple Node matchmaking service
- `analytics` – Minimal event intake service
- `infrastructure` – Docker/K8s/Terraform skeletons
