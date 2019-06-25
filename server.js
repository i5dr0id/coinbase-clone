const express = require('express')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()
const port = process.env.PORT || 80

app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))
app.listen(port)
