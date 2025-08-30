import express from 'express'
const app = express()
app.use(express.json())
const port = process.env.PORT || 8090

app.get('/health', (_, res) => res.json({ ok: true }))

// Very naive queue placeholder
let queue: string[] = []
app.post('/enqueue', (req, res) => {
  const id = (req.body && req.body.id) || Math.random().toString(36).slice(2)
  queue.push(id)
  res.json({ queued: id, size: queue.length })
})

app.listen(port, () => console.log(`Matchmaker on :${port}`))
