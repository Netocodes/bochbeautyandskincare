import { Resend } from "resend";
// import multer from "multer";
const resend = new Resend(process.env.RESEND_API_KEY);

// Configure Multer for file uploads (in memory)

// Endpoint to handle file and orderId upload
export const Proof = (req, res) => {
  const file = req.file;
  const orderId = req.body.orderId;

  if (!file || !orderId) {
    return res.status(400).send("File and order ID are required.");
  }

  // Prepare email content
  const mailOptions = {
    from: email,
    to: "darlingwest11@gmail.com",
    cc: "amaugotontee855@gmail.com",
    subject: `New Payment Proof for Order #${orderId}`,
    text: `A new payment proof has been uploaded for Order #${orderId}. Please find the attachment. and reply the costumer`,
    attachments: [
      {
        filename: file.originalname, // Use the original file name
        content: file.buffer, // Use the file buffer (in-memory)
      },
    ],
  };

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
