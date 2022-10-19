const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
require('dotenv').config()


app.use(cors())
app.use(express.json())

app.use('/api/v1', require('./router/user.router'))
app.use('/api/v1', require('./router/transport.router'))

var serverApp = app.listen(port, () => {
    console.log(`server up and running on ports ${port}`)
})

serverApp.timeout = 120000

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, err => {
    if (!err) {
      console.log('database connected');
    } else {
      console.log(err);
    }
  });
