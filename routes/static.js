


const path = require('path')
const router = require('express').Router()

const root = path.join(__dirname, '..', 'public')


router.get('/', (request, response) => {
    response.send('hello world')
})

module.exports = router