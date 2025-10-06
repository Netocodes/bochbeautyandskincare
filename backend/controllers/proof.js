import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.email;
// Endpoint to handle file and orderId upload for payment Verification
export const Proof = (req, res) => {
  const file = req.file;
  const orderId = req.body.orderId;

  // validate input
  if (!file || !orderId || orderId.lenght > 5) {
    return res
      .status(400)
      .send(
        "Payment-slip and order-ID of not more than 5 numbers are required."
      );
  }

  // Prepare email content for the user
  const mailOptions = {
    from: email,
    to: process.env.owner_mail,
    cc: "amaugotontee855@gmail.com",
    subject: `New Payment Proof for Order #${orderId}`,
    text: `A new payment proof has been uploaded for Order #${orderId}. Please find the attachment. and reply the costumer`,
    attachments: [
      {
        filename: "Payment Slip", // Use the original file name
        content: file.buffer, // Use the file buffer (in-memory)
      },
    ],
  };

  // asyncronosly send Confirmation mails
  (async () => {
    try {
      const { data, error } = await resend.emails.send(mailOptions);
      if (error) {
        return res.status(400).json("Error sending Proof", error);
      }
      res.status(200).json({
        message: "Proof uploaded, await confirmation and delivery slip",
        data: data,
      });
    } catch (error) {
      console.log("Error sending payment mail:", error);
      res.status(400).json({ error: "Could not submit payment, try again." });
    }
  })();
};

// To verify a user has paid they send their payment slip and order id for verification then their package gets sent out and notifies the user
