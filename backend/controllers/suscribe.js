import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const Suscriber = (req, res) => {
  const response = req.body;
  const { data } = response;
  const { Email } = data;

  if (!String(Email).trim()) {
    return res.status(400).json({ error: "Email is required" });
  }

  const mailOptions = {
    from: process.env.email,
    to: Email,
    subject: "Welcome to the Beauty of chiri Newsletter ✨",
    text: `Hello,

Thank you for subscribing to our newsletter! 
We’re excited to share exclusive updates, skincare tips, and special offers that will help you keep your skin healthy and glowing.

Stay tuned — your journey to radiant skin starts here.

Warm regards,
The Boch Beauty & Skincare Team
`,
    html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
    <h2 style="color: #d48a7a; text-align: center;">Welcome to Boch Beauty & Skincare</h2>
    <p style="font-size: 16px; color: #333;">
      Hello,
    </p>
    <p style="font-size: 16px; color: #333;">
      Thank you for subscribing to our newsletter! 🌸  
      We’re excited to bring you <strong>exclusive updates</strong>, <strong>skincare tips</strong>, and <strong>special offers</strong> 
      that will keep your skin healthy and glowing.
    </p>
    <p style="font-size: 16px; color: #333;">
      Stay tuned — your journey to radiant skin starts now. ✨
    </p>
    <div style="margin-top: 30px; text-align: center;">
      <a href="https://www.bochbeautyandskincare.shop" style="background-color: #d48a7a; color: white; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-size: 16px;">
        Visit Our Store
      </a>
    </div>
    <p style="font-size: 14px; color: #999; margin-top: 30px; text-align: center;">
      Warm regards, <br>
      <strong>The Boch Beauty & Skincare Team</strong>
    </p>
  </div>
  `,
  };

  const ownerMailOptions = {
    from: process.env.email,
    to: process.env.owner_mail,
    subject: "📩 New Newsletter Subscription",
    html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
    <h2 style="color: #d48a7a; text-align: center;">New Newsletter Subscriber</h2>
    <p style="font-size: 16px; color: #333;">
      Hello Boch Beauty & Skincare Team,
    </p>
    <p style="font-size: 16px; color: #333;">
      A new user has subscribed to your newsletter. 🎉
    </p>
    <div style="margin-top: 20px; padding: 15px; background-color: #f9f5f4; border-radius: 5px; border: 1px solid #eee;">
      <p style="font-size: 16px; margin: 0; color: #333;">
        <strong>Email:</strong> ${Email}
      </p>
      <p style="font-size: 16px; margin: 0; color: #333;">
        <strong>Subscribed On:</strong> ${new Date().toLocaleString()}
      </p>
    </div>
    <p style="font-size: 14px; color: #999; margin-top: 30px; text-align: center;">
      This is an automated notification from your website's newsletter system.
    </p>
  </div>
  `,
    text: `Hello Boch Beauty & Skincare Team,

A new user has subscribed to your newsletter.

Email: ${Email}
Subscribed On: ${new Date().toLocaleString()}

This is an automated notification from your website's newsletter system.
`,
  };
  (async () => {
    try {
      const response = await resend.batch.send([mailOptions, ownerMailOptions]);
      if (!response) {
        return res.status(400).json("Error sending subscription emails");
      }
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error sending emails:", error);
      res.status(500).json({ message: "Failed to send subscription emails" });
    }
  })();
};
