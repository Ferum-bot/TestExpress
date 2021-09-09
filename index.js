const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
        name: 'Bob',
        email: 'ghfdhuf85429532@gmail.com'
    },
    {
        name: 'Matvey',
        email: 'test@test.com'
    },
    {
        name: 'Test1',
        email: 'test1@test1.com'
    }
]))

app.listen(port, () => console.log(`Express test app listening port ${port}!`))