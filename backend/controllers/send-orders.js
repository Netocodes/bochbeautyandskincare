import { Resend } from "resend";

// Generate a unique order ID for each request e.g 45001
function generateOrderId() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export const SendOrder = async (req, res) => {
  const resendClient = new Resend(process.env.RESEND_API_KEY);
  try {
    // Get the customer details from the request body
    const { personalInfo, addressData, cartItems, total } = req.body;

    if (!personalInfo || !addressData || cartItems.length == 0 || total == 0) {
      return res
        .status(400)
        .json({ mssg: "Invalid or missing data in request body" });
    }

    if (
      !personalInfo.fullname.trim() ||
      !personalInfo.customerEmail.trim() ||
      !personalInfo.phoneNumber.trim()
    ) {
      return res.status(400).json({ mssg: "Invalid or missing personal info" });
    }

    if (
      !addressData.homeAdrress.trim() ||
      !addressData.city.trim() ||
      !addressData.state.trim() ||
      !addressData.zip.trim()
    ) {
      return res.status(400).json({ mssg: "Invalid or missing address data" });
    }

    const { fullname, customerEmail, phoneNumber } = personalInfo;
    const { homeAdrress, city, state, zip } = addressData;
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
          product:   ${item.title}
          Price: ₺${item.price}
        
    `
      )
      .join("")}
  
    Next Steps:
    1. Copy proof of payment by sent to this email:
       - Submit your screenshot or PDF of your payment confirmation.
       - Alonside Your already copied Order ID: ${orderId}.
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
    <ul style="background-color: #acd8d4 width:100% list-style-type: none; padding: 12px, 20px; margin: 0;">
      <li style="color:rgb(41, 28, 32);  font-size: 21px; line-height: 1.5; margin-bottom: 10px;">
        Order ID: <strong> ${orderId}</strong> 
      </li>
      <li style="color:rgb(39, 28, 31); font-size: 21px; line-height: 1.5; margin-bottom: 10px;">
        Total Amount: <strong> ${total + 200}</strong> <small>tl</small>
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
            <strong style="color: #8c2643; font-size: 18px;">${item.title}</strong><br>
            <span style="color: #8c2643; font-size: 14px; margin-top: 16px;">Price: <strong>₺${item.price}</strong></span>
            <span style="color:rgb(61, 42, 47); font-size: 14px; margin-top: 14px;">quantity: <strong>x${item.quantity}</strong></span>
          </div>
        </li>
      `
        )
        .join("")}
    </ul>

    <h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Next Steps:</h3>
    <ol style="color: #8c2643; font-size: 16px; line-height: 1.5;">
      <li style="background-color: #acd8d4; width:100%; padding: 12px, 20px; border:2px dotted rgb(48, 42, 42) margin: 0;">
        <strong>Copy the Order Id sent to this email:</strong>
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>A screenshot or PDF of your payment confirmation.</li>
          <li>Your already copied Order ID: <strong>${orderId}</strong>.</li>
        </ul>
      </li>
      <li>Once we verify your payment, we will send you a confirmation message and your shipping status.</li>

    </ol>
        <a href="https://www.bochbeautyandskincare.shop/verify-payment" style="background-color: #8c2643; color: #ffffff; margin: 20px, 0; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 20px; cursor: pointer;">Submit Proof of Payment</a>

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
- Order ID: ${orderId}
- Customer Name: ${fullname}
- Customer Email: ${customerEmail}
- Customer Contact: ${phoneNumber}

Shipping Address:
- Address: ${homeAdrress}
- City: ${city}
- State: ${state}
- ZIP: ${zip}

Items Ordered:
${cartItems
  .map(
    (item) => `
  - Product: ${item.title}
  - Price: ₺${item.price}
  - Quantity: ${item.quantity}
`
  )
  .join("")}
  Order Details:
    - Order ID: ${orderId}
    - Total Amount: $${total}
Important: Make sure to use the Order ID: ${orderId} to verify the user who paid for this order.

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
      <strong>Address:</strong> ${homeAdrress}
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
        <span style="color: #8c2643; font-size: 14px; margin-top: 14px;">Quantity: <strong>x${item.quantity}</strong></span>
      
        </div>
    </li>
  `
    )
    .join("")}
  </ul>
<h3 style="color: #8c2643; font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Order Details:</h3>
    <ul style="background-color: #acd8d4 width:100% list-style-type: none; padding: 12px, 20px; margin: 0;">
      <li style="color:rgb(41, 28, 32);  font-size: 21px; line-height: 1.5; margin-bottom: 10px;">
        Order ID: <strong> ${orderId}</strong> 
      </li>
      <li style="color:rgb(39, 28, 31); font-size: 21px; line-height: 1.5; margin-bottom: 10px;">
        Total Amount: <strong> ${total + 200}</strong> <small>tl</small>
      </li>
    </ul>
  <!-- Bottom Section -->
  <div style="margin-top: 30px; padding: 15px; background: #fff; border-radius: 5px; border: 1px solid #ddd;">
    <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">
      <strong>Important:</strong> Make sure to use the <strong>Order ID: ${orderId}</strong> to verify the user who paid for this order.
    </p>
  </div>

  <p style="color: #8c2643; font-size: 16px; line-height: 1.5; margin-top: 20px;">
    If you have any questions, please contact the customer <a href="mailto:${customerEmail}">directly</a> or reply to this email.
  <p style="color: #8c2643; font-size: 16px; line-height: 1.5;">
    Best regards,<br>
          <strong><a href="https://www.bochbeautyandskincare.shop/">bochbeautyandskincare</a></strong>
          <strong><a href="https://www.netocodes.pro">and Your Developer @NetoCodes</a></strong>

  </p>
</div>
    `;

    // Email options for the customer
    const mailOptions = {
      from: "Orders <contact@bochbeautyandskincare.shop>",
      to: customerEmail,
      subject: `Order Confirmation - ${orderId}`,
      text: emailText,
      html: emailHtml,
    };

    // Email options for the owner
    const ownerMailOptions = {
      from: "Orders <contact@bochbeautyandskincare.shop>",
      to: process.env.email,
      cc: "netochukwucodes@gmail.com",
      subject: `New Order - ${orderId}`,
      text: ownerEmailText,
      html: ownerEmailHtml,
    };

    (async () => {
      try {
        const data = await resendClient.batch.send([
          mailOptions,
          ownerMailOptions,
        ]); // Send the owner email
        if (!data) {
          return res.status(500).json({ mssg: "Failed to send emails" });
        }
        res.status(200).json({ message: "Emails sent successfully" });
      } catch (error) {
        console.error("Error sending emails:", error);
        res
          .status(500)
          .json({ message: "Failed to send subscription emails", error });
      }
    })();
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
};
