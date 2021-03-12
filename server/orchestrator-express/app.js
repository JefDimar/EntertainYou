const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
const cors = require('cors')
const router = require('./routers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(PORT, () => {
  console.log('Orchestrator listening on port ' + PORT)
})