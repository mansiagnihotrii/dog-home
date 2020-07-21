const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')



mongoose.connect(MONGOURI,{ useUnifiedTopology: true , useNewUrlParser: true})
mongoose.connection.on('connected',()=> {
  console.log('MongoDB connected')
})

mongoose.connection.on('error',(err)=> {
  console.log("ERROR:",err)
})

require('./models/user')
require('./models/post')

app.use(express.json()) //middleware
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT,()=>{
  console.log("Server is running on ",PORT)
})
