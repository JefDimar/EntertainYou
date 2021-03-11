const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');
const { connect } = require('./config/mongodb');

let database = null

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connect().then(async (db) => {
  console.log('mongodb connected');

  database = db

  app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
  })
})
