require("dotenv").config()
const express = require('express')
const cors = require('cors')
const nodeMailer = require('nodemailer')
const bodyParser = require('body-parser')

let port =  process.env.PORT_NUMBER ;
let email = process.env.EMAIL;
let password = process.env.PASSWORD;
function generateOrderId() {
    // Generate a random number between 10000 and 99999
    const orderId = Math.floor(10000 + Math.random() * 90000);
    return orderId.toString(); // Convert to string if needed
  }
   const orderId = generateOrderId()
   
const app = express();
//middleWare
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const transporter = nodeMailer.createTransport({
    host: 'smtp.hostinger.com', 
    port: 465, 
    secure: true, 
    auth: {
        user: email, 
        pass: password 
    },
    pool: true, // Enable connection pooling
    maxConnections: 5,
})

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the server')
})
app.post('/send-email', async(req, res) => {
    req.body = {
        name: 'Neto',
        email: 'netochukwucodes@gmail.com',
        contact: +2349134730499
    }
//send product and details to the body
   try {
    transporter.verify(function (error, success) {
        error && console.log(error)
        success && console.log('Server is ready')
      });
      const emailText = `
      Hi ${req.body.name},
  
      Thank you for your purchase! Your order has been confirmed.
  
      Order Details:
      - Order ID: ${orderId}
      - Total Amount: $
  
      Items Ordered:
  
      If you have any questions, please contact us.
  
      Best regards,
      Your Company Name
    `;
  
    const emailHtml = `
      <h2>Order Confirmation</h2>
      <p>Hi ${req.body.name},</p>
      <p>Thank you for your purchase! Your order has been confirmed.</p>
  
      <h3>Order Details:</h3>
      <ul>
        <li><strong>Order ID:</strong> ${orderId}</li>
        <li><strong>Total Amount:</strong> $</li>
      </ul>
  
      <h3>Items Ordered:</h3>
      <ul>
      </ul>
  
      <p>If you have any questions, please contact us.</p>
      <p>Best regards,<br>Your Company Name</p>
    `;
    const ownerEmailText = `
    New Order Received!

    Order Details:
    - Order ID: ${orderId}
    - Customer Name: ${req.body.name}
    - Customer Email: ${email}

    Items Ordered:
    <li> My Heart is In Coding</li>
  `;

  const ownerEmailHtml = `
    <h2>New Order Received!</h2>

    <h3>Order Details:</h3>
    <ul>
      <li><strong>Order ID:</strong> ${orderId}</li>
      <li><strong>Customer Name:</strong> ${req.body.name}</li>
      <li><strong>Customer Email:</strong> ${req.body.email}</li>
    </ul>

    <h3>Items Ordered:</h3>
    <ul>
    <li> My Heart is In Coding</li>
    </ul>
  `;

  const ownerMailOptions = {
    from: email,
    to: email, 
    subject: `New Order - ${orderId}`,
    text: ownerEmailText,
    html: ownerEmailHtml
  };
    const mailOptions = {
        from: email,
        to: req.body.email,
        subject: `Order Confirmation - ${orderId}`,
        text: emailText,
        html: emailHtml
      };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('error:', error)
            res.status(500).send('error')
        } else {
            console.log('Email has been sent: ' + info.response)
            res.status(200).send('Email sent')
        }
   })
    transporter.sendMail(ownerMailOptions, (error, info) => {
        if (error) {
            console.log('error:', error)
            res.status(500).send('error')
        } else {
            console.log('Email has been sent: ' + info.response)
            res.status(200).send('Email sent')
        }
   })
   } catch (error) {
    console.log('error:', error)
   }

})

app.listen(port, () => {
    console.log(`server is live at: port ${port}`)
})