const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')

app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())

app.use(express.static('public'))

app.use(router)

app.use((req, res, next) => res.sendStatus(404))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Port: ${PORT}`));
