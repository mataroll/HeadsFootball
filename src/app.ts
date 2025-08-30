import express from 'express'
import cors from 'cors'

export function createApp() {
  const app = express()
  app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
  app.use(express.json())

  app.get('/health', (_, res) => res.json({ ok: true }))

  // Placeholder routes
  app.get('/api/leaderboard', (_, res) => res.json({ leaders: [] }))

  return app
}
