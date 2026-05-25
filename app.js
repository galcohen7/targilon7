const express = require('express')
const app = express()

app.use(express.json())

const articleRoutes = require('./routes/articles')
app.use('/api/articles', articleRoutes)

app.listen(3000)