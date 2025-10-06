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
- Total Amount: ₺${total + 200}

Items Ordered:
${cartItems
  .map(
    (item) => `
  - Product: ${item.title}
  - Price: ₺${item.price}
  - Quantity: x${item.quantity}
`
  )
  .join("")}

Next Steps:
1. Copy your Order ID: ${orderId}.
2. Send a screenshot or PDF of your payment confirmation to this email.
3. Once we verify your payment, we’ll send you a confirmation message and shipping status.

If you have any questions, please contact us or reply to this email.

Best regards,  
Bochbeautyandskincare
`;

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Confirmation</title>
    <style>
      /* Basic resets for email */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      body { margin: 0; padding: 0; width: 100% !important; }

      /* Mobile responsiveness */
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding: 16px !important;
        }
        .order-id {
          font-size: 24px !important;
          padding: 12px 18px !important;
        }
        .item img {
          width: 70px !important;
        }
      }
    </style>
  </head>
  <body style="background-color: #f5f5dc; font-family: Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:12px; overflow:hidden; margin-top:20px; padding:24px;">
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h2 style="color:#8c2643; font-size:24px; margin:0;">🛍️ Order Confirmation</h2>
              </td>
            </tr>

            <!-- ORDER ID -->
            <tr>
              <td align="center" style="padding:20px 0;">
                <div class="order-id" style="background:#8c2643; color:#fff; font-size:30px; font-weight:800; padding:16px 28px; border-radius:8px; letter-spacing:2px;">
                  ${orderId}
                </div>
                <p style="font-size:14px; color:#8c2643; margin-top:8px;">Use this Order ID to verify your payment</p>
              </td>
            </tr>

            <!-- TOTAL -->
            <tr>
              <td style="background:#acd8d4; padding:16px; border-radius:8px; color:#291c20; font-size:18px; text-align:center;">
                <strong>Total Amount: ₺${total + 200}</strong>
              </td>
            </tr>

            <!-- ITEMS -->
            <tr>
              <td style="padding-top:25px;">
                <h3 style="color:#8c2643; font-size:20px; margin-bottom:10px;">Items Ordered</h3>
                ${cartItems
                  .map(
                    (item) => `
                <table class="item" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:15px; border-bottom:1px solid #ddd; padding-bottom:10px;">
                  <tr>
                    <td width="100" valign="top">
                      <img src="${item.imageUrl}" alt="${item.title}" style="width:90px; border-radius:6px; display:block;">
                    </td>
                    <td valign="top" style="padding-left:12px;">
                      <strong style="color:#8c2643; font-size:16px; display:block;">${item.title}</strong>
                      <span style="color:#8c2643; font-size:14px;">Price: ₺${item.price}</span><br/>
                      <span style="color:#3d2a2f; font-size:14px;">Quantity: x${item.quantity}</span>
                    </td>
                  </tr>
                </table>`
                  )
                  .join("")}
              </td>
            </tr>

            <!-- NEXT STEPS -->
            <tr>
              <td>
                <h3 style="color:#8c2643; font-size:20px; margin-top:20px; margin-bottom:10px;">Next Steps</h3>
                <ol style="color:#8c2643; font-size:16px; line-height:1.6; padding-left:20px;">
                  <li style="background-color:#acd8d4; padding:12px 16px; border:2px dotted #302a2a; border-radius:8px; margin-bottom:10px;">
                    Attach your payment confirmation (screenshot or PDF) and include your Order ID <strong>${orderId}</strong>.
                  </li>
                  <li>Once verified, we’ll send a confirmation and shipping status.</li>
                </ol>
              </td>
            </tr>

            <!-- BUTTON -->
            <tr>
              <td align="center" style="padding-top:25px;">
                <a href="https://www.bochbeautyandskincare.shop/verify-payment" 
                  style="display:inline-block; background-color:#8c2643; color:#ffffff; padding:14px 28px; text-decoration:none; border-radius:6px; font-size:16px; font-weight:600;">
                  Submit Proof of Payment
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding-top:25px; font-size:14px; color:#8c2643; text-align:center;">
                If you have any questions, reply to this email.<br/>
                <strong><a href="https://www.bochbeautyandskincare.shop/" style="color:#8c2643; text-decoration:none;">bochbeautyandskincare</a></strong>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

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

Order Summary:
- Total Amount: ₺${total + 200}

Important: Use the Order ID ${orderId} to verify the payment.

If you have any questions, please contact the customer directly or reply to this email.

Best regards,  
bochbeautyandskincare  
Your Developer @NetoCodes
`;

    const ownerEmailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Order</title>
    <style>
      body, table, td { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      img { -ms-interpolation-mode: bicubic; }
      body { margin: 0; padding: 0; width: 100% !important; }

      @media screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 16px !important; }
        .order-id { font-size: 22px !important; padding: 10px 14px !important; }
        .item img { width: 70px !important; }
      }
    </style>
  </head>
  <body style="background-color:#f5f5dc; font-family:Arial, sans-serif;">
    <table width="100%">
      <tr>
        <td align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" style="background:#fff; border-radius:12px; overflow:hidden; margin-top:20px; padding:24px;">
            <tr>
              <td align="center">
                <h2 style="color:#8c2643; font-size:24px;">📝 New Order Received</h2>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:20px 0;">
                <div class="order-id" style="background:#8c2643; color:#fff; font-size:28px; font-weight:800; padding:14px 26px; border-radius:8px; letter-spacing:2px;">
                  ${orderId}
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <h3 style="color:#8c2643; font-size:20px; margin-top:20px;">Customer Details</h3>
                <p><strong>Name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>
              </td>
            </tr>

            <tr>
              <td>
                <h3 style="color:#8c2643; font-size:20px; margin-top:20px;">Shipping Address</h3>
                <p>${homeAdrress}, ${city}, ${state}, ${zip}</p>
              </td>
            </tr>

            <tr>
              <td>
                <h3 style="color:#8c2643; font-size:20px; margin-top:20px;">Items</h3>
                ${cartItems
                  .map(
                    (item) => `
                <table class="item" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:12px; border-bottom:1px solid #ddd; padding-bottom:8px;">
                  <tr>
                    <td width="100"><img src="${item.imageUrl}" alt="${item.title}" style="width:90px; border-radius:6px;"></td>
                    <td style="padding-left:12px;">
                      <strong>${item.title}</strong><br/>
                      ₺${item.price} × ${item.quantity}
                    </td>
                  </tr>
                </table>`
                  )
                  .join("")}
              </td>
            </tr>

            <tr>
              <td style="background:#acd8d4; padding:16px; border-radius:8px; text-align:center; font-size:18px; color:#291c20; margin-top:15px;">
                <strong>Total: ₺${total + 200}</strong>
              </td>
            </tr>

            <tr>
              <td style="text-align:center; font-size:14px; color:#8c2643; padding-top:20px;">
                Reply to this email to contact the customer or reach them at <a href="mailto:${customerEmail}" style="color:#8c2643;">${customerEmail}</a>.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
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
