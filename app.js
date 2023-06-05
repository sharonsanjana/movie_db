require("dotenv").config()


const express = require("express")
const app = express()
const PORT = 5678
const movie = require("./routes/movie")
const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL)
const db= mongoose.connection
db.on('error',errorMessage => console.log(errorMessage))
db.once('open',() => console.log('connection established'))

app.use(express.json())
app.get('/',(request,response) => {
    response.send("hello")

})

app.use('/api/v1/movie',movie) 

app.listen(PORT,console.log(`database running at http://localhost:${PORT}`))