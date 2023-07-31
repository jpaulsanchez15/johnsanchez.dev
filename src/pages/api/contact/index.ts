import { config } from "dotenv";
import { type NextApiRequest, type NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

config();

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  } else {
    try {
      sgMail.setApiKey(process.env.SEND_GRID_KEY ?? "");
      const msg = {
        to: process.env.EMAIL,
        from: process.env.EMAIL,
        subject: `New Message: ${req.body.subject}`,
        html: `<p>Name: ${req.body.fullName}</p><br /><p>Message: ${req.body.message}</p><br /><p>Email: ${req.body.email}</p> `,
      };
      
      await sgMail.send(msg);

      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  return;
};

export default sendEmail;
