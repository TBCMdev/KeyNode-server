const express = require('express')
const cors = require('cors')
const functions = require('firebase-functions')
const body = require('body-parser')
const { readFile, readFileSync } = require('fs')
const { rawListeners } = require('process')

var app = express()


app.use(cors())
app.use(body.json())



app.get('/download', (req, res) => {
    const path = `../exe/__.exe`

    res.download(path)

})
app.get('/', (req, res) => {
    res.sendFile(`C:\\Users\\krist\\Desktop\\code\\ComputerKeyMonitor SERVER\\index.html`)
})

exports.app = functions.https.onRequest(app);