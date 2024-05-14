const Mailjet = require("node-mailjet");

const { MAIL_USERNAME, MAIL_PASSWORD, MAIL_FROM_ADDRESS, MAIL_FROM_NAME } =
  process.env;

const mailjet = Mailjet.apiConnect(MAIL_USERNAME, MAIL_PASSWORD);

async function sendMail(to, subject, text) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: MAIL_FROM_ADDRESS, Name: MAIL_FROM_NAME },
        To: [{ Email: to }],
        Subject: subject,
        TextPart: text,
      },
    ],
  });

  const { body } = await request;

  return body;
}

module.exports = { sendMail };
