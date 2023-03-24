import { config } from "dotenv";
import { type NextApiRequest, type NextApiResponse } from "next";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
config();

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID || "";
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY_ID || "";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  } else {
    const client = new SESClient({
      region: "US",
      credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
      },
    });
    console.log({ ...req.body });
    try {
      client.send(new SendEmailCommand({
        Destination: {
          ToAddresses: ["jpsanchez1122@gmail.com"],
        },
        Message: {
          Body: {
            Text: {
              Data: `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`,
            },
          },
          Subject: {
            Data: "New message from your website!",
          },
        },
        Source: " ",
       }));
      res.status(200).json({ message: "Email successfully sent! Thank you!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  return;
};

export default sendEmail;
