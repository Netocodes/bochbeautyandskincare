require("dotenv").config()
const express = require("express");
const router = express.Router()
const nodeMailer = require("nodemailer")


const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodeMailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
  pool: true, // Enable connection pooling
  maxConnections: 5,
});

// Verify the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter verification failed:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});
router.post('/suscribe', (req, res) => {
const response = req.body
const {data} = response
const mailOptions = {
  from: email,
  to: data.Email,
subject: "Welcome to the newsletter",
text: "Thank you for subscribing to our newsletter",
              };
const ownerOptions ={
                from: email,
                to: email,
                subject: "New subscriber",
                text: `${data.Email} has subscribed to the newsletter`,
}
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
                transporter.sendMail(ownerOptions, (error, info) => {
                if (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ message: "Internal server error" });
                } else {
                console.log("Email sent:", info.response);
                res.status(200).json({ message: "Email sent successfully" });
                }
                });
                
})
module.exports = router