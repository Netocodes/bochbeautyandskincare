require("dotenv").config()
const express = require('express')
const cors = require('cors')
const nodeMailer = require('nodemailer')
const bodyParser = require('body-parser')

let port = process.env.PORT_NUMBER;
let email = process.env.EMAIL;
let password = process.env.PASSWORD;
const app = express();
//middleWare
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password 
    }
})

app.post('/send-email', async(req, res) => {
//send product and details to the body
   try {
    console.log('req.body:', req.body)
   } catch (error) {
    console.log('error:', error)
   }

})

app.listen(port, () => {
    console.log(`server is live at: port ${port}`)
})