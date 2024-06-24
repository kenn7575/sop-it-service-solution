import Mailjet from "node-mailjet";
import dotenv from "dotenv";

dotenv.config();

const {
  MAIL_USERNAME: username,
  MAIL_PASSWORD: password,
  MAIL_FROM_ADDRESS: from_addr,
  MAIL_FROM_NAME: from_name,
} = process.env;

export async function sendMail(to: string, subject: string, text: string) {
  if (!username || !password || !from_addr || !from_name) return;

  const mailjet = Mailjet.apiConnect(username, password);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: from_addr, Name: from_name },
        To: [{ Email: to }],
        Subject: subject,
        TextPart: text,
      },
    ],
  });

  const { body } = await request;

  return body;
}
