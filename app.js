
const express = require('express')
const app = express()
const port = 3000


// allow sending of json
app.use(express.json())
// allow response with static webpages
app.use(express.static('public'))


// attach endpoints
app.use('/api/v1/food-truck', require('./routes/api/v1/food-truck'))
app.use(require('./routes/static'))




// router.get('/', async (request, response) => {
//     response.sendFile('index.html', { root })
// })

// router.get('/event/:eventId', async (request, response) => {
//     response.sendFile('index.html', { root })
// })

// router.get('/admin', async (request, response) => {
//     response.sendFile('index.html', { root })
// })


app.listen(port, () => console.log(`http://localhost:${port}`))