const express = require('express')

// Start express in app
const app = express()

// Create the server
const port = process.env.PORT || 3002


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})