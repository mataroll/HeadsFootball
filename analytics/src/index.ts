import express from 'express'
const app = express()
app.use(express.json())
const port = process.env.PORT || 8091

app.get('/health', (_, res) => res.json({ ok: true }))

app.post('/event', (req, res) => {
  console.log('analytics event', req.body)
  res.json({ stored: true })
})

app.listen(port, () => console.log(`Analytics on :${port}`))
