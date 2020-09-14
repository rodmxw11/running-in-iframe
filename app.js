const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/EHR_MobilePWA.html');
})

app.listen(port, () => {
  console.log(`EHR Example app listening at http://localhost:${port}`)
})