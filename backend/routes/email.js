require("dotenv").config()
const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");



const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Generate a unique order ID for each request
function generateOrderId() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

// Configure the email transporter
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

// Home route
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server" });
});

// Send email route
router.post("/send-email", async (req, res) => {
  try {
    const response = req.body;
    const {requestedData} = response
   
    // Get the customer details from the request body
    const { personalInfo, addressData, cartItems, total } = requestedData;
    if (!personalInfo || !addressData || !cartItems || total === 0){
      res.status(400).json({mssg: "Couldnt get The Data Well"})
    }
    const { fullname, customerEmail, phoneNumber } = personalInfo;
    const { homeAddress, city, state, zip } = addressData;
    // Generate a new order ID for this request
    const orderId = generateOrderId();

    // Email content for the customer
    const emailText = `
    Hi ${fullname},
  
    Thank you for your purchase! Your order has been confirmed.
  
    Order Details:
    - Order ID: ${orderId}
    - Total Amount: $${total}
  
    Items Ordered:
    ${cartItems
      .map(
        (item) => `
      <li style="margin-bottom: 20px;">
        <img src="${item.imageUrl}" alt="${item.title}" style="width: 100px; height: auto; border-radius: 5px; margin-right: 10px;">
        <div>
          <strong>${item.title}</strong><br>
          Price: ₺${item.price}
        </div>
      </li>
    `
      )
      .join("")}
  
    Next Steps:
    1. Submit proof of payment by replying to this email with:
       - A screenshot or PDF of your payment confirmation.
       - Your Order ID: ${orderId}.
    2. Once we verify your payment, we will send you a confirmation message and shipping status.
  
    If you have any questions, please contact us or reply to this email.
  
    Best regards,
    Bochbeautyandskincare
  `;

  const emailHtml = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background: #f5f5dc;">
    <h2 style="color: #8c2643; font-size: 24px; margin-bottom: 20px;">Order Confirmation</h2>
    <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">Hi ${fullname},</p>
    <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">Thank you for your purchase! Your order has been confirmed.</p>

    <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Order Details:</h3>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
        <strong>Order ID:</strong> ${orderId}
      </li>
      <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
        <strong>Total Amount:</strong> ₺${total}
      </li>
    </ul>

    <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Items Ordered:</h3>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      ${cartItems
        .map(
          (item) => `
        <li style="display: flex; align-items: center; margin-bottom: 20px;">
          <img src="${item.imageUrl}" alt="${item.title}" style="width: 100px; height: auto; border-radius: 5px; margin-right: 10px;">
          <div>
            <strong style="color: #8c2643; font-size: 16px;">${item.title}</strong><br>
            <span style="color: #8c2643; font-size: 14px; margin-top: 14px;">Price: <strong>₺${item.price}</strong></span>
          </div>
        </li>
      `
        )
        .join("")}
    </ul>

    <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Next Steps:</h3>
    <ol style="color: #8c2643; font-size: 16px; line-height: 1.5;">
      <li>
        Submit proof of payment by replying to this email with:
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>A screenshot or PDF of your payment confirmation.</li>
          <li>Your Order ID: <strong>${orderId}</strong>.</li>
        </ul>
      </li>
      <li>Once we verify your payment, we will send you a confirmation number to complete your order.</li>
    </ol>

    <p style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-top: 20px;">
      If you have any questions, please contact us or reply to this email.
    </p>
    <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">
      Best regards,<br>
      <strong><a href="https://www.bochbeautyandskincare.shop/">bochbeautyandskincare</a></strong>
    </p>
  </div>
`;

    // Email content for the owner
    const ownerEmailText = `
   New Order Received!

Order Details:
- Order ID: 12345
- Customer Name: John Doe
- Customer Email: john.doe@example.com
- Customer Contact: +1234567890

Shipping Address:
- Address: 123 Main St
- City: New York
- State: NY
- ZIP: 10001

Items Ordered:
- Product 1: ₺50
- Product 2: ₺30

Important: Make sure to use the Order ID: 12345 to verify the user who paid for this order.

If you have any questions, please contact the customer directly or reply to this email.

Best regards,
bochbeautyandskincare
    `;

    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background: #f5f5dc; color: #8c2643;">
  <h2 style="color: #8c2643; font-size: 24px; margin-bottom: 20px;">New Order Received!</h2>

  <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Order Details:</h3>
  <ul style="list-style-type: none; padding: 0; margin: 0;">
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>Order ID:</strong> ${orderId}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>Customer Name:</strong> ${fullname}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>Customer Email:</strong> ${customerEmail}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>Customer Contact:</strong> ${phoneNumber}
    </li>
  </ul>

  <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Shipping Address:</h3>
  <ul style="list-style-type: none; padding: 0; margin: 0;">
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>Address:</strong> ${homeAddress}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>City:</strong> ${city}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>State:</strong> ${state}
    </li>
    <li style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
      <strong>ZIP:</strong> ${zip}
    </li>
  </ul>

  <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Items Ordered:</h3>
  <ul style="list-style-type: none; padding: 0; margin: 0;">
  ${cartItems
    .map(
      (item) => `
    <li style="display: flex; align-items: center; margin-bottom: 20px;">
      <img src="${item.imageUrl}" alt="${item.title}" style="width: 100px; height: auto; border-radius: 5px; margin-right: 10px;">
      <div>
        <strong style="color: #8c2643; font-size: 16px;">${item.title}</strong><br>
        <span style="color: #8c2643; font-size: 14px; margin-top: 14px;">Price: <strong>₺${item.price}</strong></span>
      </div>
    </li>
  `
    )
    .join("")}
  </ul>

  <!-- Bottom Section -->
  <div style="margin-top: 30px; padding: 15px; background: #fff; border-radius: 5px; border: 1px solid #ddd;">
    <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">
      <strong>Important:</strong> Make sure to use the <strong>Order ID: ${orderId}</strong> to verify the user who paid for this order.
    </p>
  </div>

  <p style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-top: 20px;">
    If you have any questions, please contact the customer @${customerEmail} 
  </p>
  <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">
    Best regards,<br>
          <strong><a href="https://www.bochbeautyandskincare.shop/">bochbeautyandskincare</a></strong>

  </p>
</div>
    `;

    // Email options for the customer
    const mailOptions = {
      from: email,
      to: customerEmail,
      subject: `Order Confirmation - ${orderId}`,
      text: emailText,
      html: emailHtml,
    };

    // Email options for the owner
    const ownerMailOptions = {
      from: email,
      to: email,
      subject: `New Order - ${orderId}`,
      text: ownerEmailText,
      html: ownerEmailHtml,
    };

    // Send the customer email
    await transporter.sendMail(mailOptions);
    console.log("Customer email sent");

    // Send the owner email
    await transporter.sendMail(ownerMailOptions);
    console.log("Owner email sent");

    // Send a success response
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});



module.exports = router;