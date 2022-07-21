const express = require('express')
const app = express()
const port = 3000

let members = [1, 2, 3];
    

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('about sport');
})

app.get('/users', (req, res) => {
    res.send(members);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})