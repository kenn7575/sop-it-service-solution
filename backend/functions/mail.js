const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
  process.env.MAIL_USERNAME,
  process.env.MAIL_PASSWORD,
)

async function sendMail(to, subject, text) {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAIL_FROM_ADDRESS,
          Name: process.env.MAIL_FROM_NAME,
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: subject,
        TextPart: text,
      },
    ],
  });

  const result = await request;

  return result.body;
}

module.exports = { sendMail };
