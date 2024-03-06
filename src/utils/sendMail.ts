import sgMail from "@sendgrid/mail";
import { env } from "../env";

export const sendMail = async (subject: string, text: string) => {
  sgMail.setApiKey(env.MAIL_PASS);
  const msg = {
    to: env.ERR_MAIL_TO,
    from: env.MAIL_FROM,
    subject: subject,
    text: text,
  };
  await sgMail.send(msg);
};
