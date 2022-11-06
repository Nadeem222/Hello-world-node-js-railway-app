import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/name', (req, res) => {
  console.log(`${req.ip}is asking for water`)
  res.send('nadeem')
})

app.get('/water', (req, res) => {
    res.send('here is your water')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})