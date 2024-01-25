require('dotenv').config()
const express = require("express")
const db = require('mongoose')
const cors = require('cors')

// Express app
const app = express()
const URoutes = require('./routes/user')

// Middleware
app.use(cors())
app.use(express.json())

// Optional
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/user', URoutes)

// Listen for requests
db.connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to MongoDB...\nListening @port #5000...")
        })
    })
    .catch((error) => {
        console.log(error)
    })