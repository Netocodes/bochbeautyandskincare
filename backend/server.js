require("dotenv").config()
const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const Email = require("./routes/email")
const Suscribe = require("./routes/suscribe")
let port =  process.env.PORT_NUMBER || 3000;


   
const app = express();
//middleWare
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.post("/send-email", Email) 
// app.get('/', Email)

app.post('/suscribe', Suscribe)


app.listen(port, () => {
    console.log(`server is live at: port ${port}`)
})