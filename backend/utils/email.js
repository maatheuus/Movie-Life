import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  const msg = {
    to: options.email,
    from: process.env.SENDGRID_EMAIL_ADDRESS,
    subject: options.subject,
    text: options.message,
  };

  await sgMail.send(msg);
};

export default sendEmail;
