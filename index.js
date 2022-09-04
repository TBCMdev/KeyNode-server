const express = require('express')
const cors = require('cors')
const body = require('body-parser')

var app = express()


app.use(cors())
app.use(body.json())



app.get('/download', (req, res) => {
    const path = `${__dirname}/exe/__.exe`

    res.download(path)

})
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(4000, () => {
    console.log("listening...")
})

