
const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.static('public'))


app.use('/api/v1/food-truck', require('./routes/api/v1/food-truck'))
app.use(require('./routes/static'))




app.listen(port, () => console.log(`http://localhost:${port}`))