const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/register', (req, res) => {
    console.log(req.query)
    res.send("This is Standerd GET Request")
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.send("This is Standerd POST Request")
})

app.listen(port, () => {
    console.log(`Port listening on ${port}`)
})