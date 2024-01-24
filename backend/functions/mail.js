const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: true,
});

async function sendMail(to, subject, text) {
  console.log("Sending mail to", to);
  await transporter.sendMail({
    from: process.env.MAIL_FROM_NAME,
    to,
    subject,
    text,
  });
}

module.exports = { sendMail };
