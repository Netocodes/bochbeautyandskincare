require("dotenv").config()
const express = require('express')
const cors = require('cors')
let port = process.env.PORT_NUMBER;
const app = express();
//middleWare
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello world"})
})

app.listen(port, () => {
    console.log(`server is live at: ${port}`)
})