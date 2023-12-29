import nodemailer from "nodemailer";

interface SendMailProps {
  to: string;
  subject: string;
  text: string;
}

const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.SMTP_MAIL,
    pass: import.meta.env.SMTP_PASSWORD,
  },
});

export const sendMail = async ({
  to,
  subject,
  text,
}: SendMailProps): Promise<void> => {
  const info = await transporter.sendMail({
    from: import.meta.env.SMTP_MAIL,
    to,
    subject,
    text,
  });

  console.log(`Message sent: ${info.messageId}`);
};
