const express = require('express');
const router = express.Router()
const multer = require('multer');
const nodemailer = require('nodemailer');
const email = process.env.EMAIL;
const password = process.env.PASSWORD;


// Configure Multer for file uploads (in memory)
const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
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

// Endpoint to handle file and orderId upload
router.post('/upload-proof', upload.single('proof'), (req, res) => {
  const file = req.file;
  const orderId = req.body.orderId;

  if (!file || !orderId) {
    return res.status(400).send('File and order ID are required.');
  }

  // Prepare email content
  const mailOptions = {
    from: email,
    to: 'netochukwucodes@gmail.com', 
    subject: `New Payment Proof for Order #${orderId}`,
    text: `A new payment proof has been uploaded for Order #${orderId}. Please find the attachment.`,
    attachments: [
      {
        filename: file.originalname, // Use the original file name
        content: file.buffer, // Use the file buffer (in-memory)
      },
    ],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Failed to submit Proof');
    }

    console.log('Email sent:', info.response);
    res.send('Your proof has been uploaded successfully');
  });
});

module.exports = router