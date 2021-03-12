const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002
const cors = require('cors')
const { connect } = require('./config/mongodb')
const router = require('./routers/index')

let database = null

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

connect().then(async (db) => {
  console.log('mongodb for tvseries connected')

  database = db

  app.listem(PORT, () => {
    console.log('listening on port ' + PORT)
  })
})