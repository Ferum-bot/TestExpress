const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({
    name: 'Bob',
    email: 'ghfdhuf85429532@gmail.com'
}))

app.listen(port, () => console.log(`Express test app listening port ${port}!`))