
const express = require('express')
const app = express()
const port = 3000


const path = require('path')
const root = path.join(__dirname, 'public')


// allow sending of json
app.use(express.json())
// allow response with static webpages
app.use(express.static('public'))


// attach endpoints
app.use('/api/v1/food-truck', require('./routes/api/v1/food-truck'))
app.use(require('./routes/static'))


app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/event/:eventId', (request, response) => {
    response.sendFile('events.html', { root })
})

app.get('/admin', (request, response) => {
    response.sendFile('admin.html', { root })
})

app.listen(port, () => console.log(`http://localhost:${port}`))