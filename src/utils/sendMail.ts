import sgMail from "@sendgrid/mail";
import { env } from "../env";

export const sendMail = async ({title, content}:{title: string, content: string}: ) => {
  sgMail.setApiKey(env.MAIL_PASS);
  const msg = {
    to: env.ERR_MAIL_TO,
    from: env.MAIL_FROM,
    subject: title,
    text: content,
  };
  await sgMail.send(msg);
};
