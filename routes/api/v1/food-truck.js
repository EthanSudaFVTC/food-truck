
const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')

let collection = null

const getMenuItems = async () => {
    let collection = null
    if (!collection) collection = await getCollection('FoodTruckAPI', 'MenuItems')
    return collection
}

const getEvents = async () => {
    let collection = null
    if (!collection) collection = await getCollection('FoodTruckAPI', 'Events')
    return collection
}





router.get('/menu', async (request, response) => {
    const collection = await getMenuItems()
    const found = await collection.find().toArray()
    response.send(found)
})


router.get('/events', async (request, response) => {
    const collection = await getEvents()
    const found = await collection.find().toArray()
    response.send(found)
})


router.get('/menu/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getMenuItems()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find menu item with id: ${id}` }})
})

router.get('/events/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getEvents()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find menu item with id: ${id}` }})
})

router.post('/menu', async (request, response) => {
    const { name, description, price, url } = request.body
    const collection = await getMenuItems()
    const { acknowledged, insertedId } = await collection.insertOne({ name, description, price, url })
    response.send({ acknowledged, insertedId })
})

router.post('/events', async (request, response) => {
    const { name, location, date, time } = request.body
    const collection = await getEvents()
    const { acknowledged, insertedId } = await collection.insertOne({ name, location, date, time })
    response.send({ acknowledged, insertedId })
})

module.exports = router