// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, subject, message } = req.body;

  if (!email || !message) {
    res.status(400).json({ error: 'Email and message are required' });
    return;
  }

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'may05nineteen90@gmail.com', // Your Gmail address
      pass: process.env.GMAIL_APP_PWD, // App-specific password (use App Passwords for security)
    },
  });

  const mailOptions = {
    from: email, // Replace with your sender email address
    replyTo: email,
    to: 'replytobishnu@gmail.com', // Replace with the recipient's email address
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Email sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
