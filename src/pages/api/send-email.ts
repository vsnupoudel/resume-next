// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set your SendGrid API key

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, message } = req.body;

  if (!email || !message) {
    res.status(400).json({ error: 'Email and message are required' });
    return;
  }

  const mailOptions = {
    from: 'sender@example.com', // Replace with your sender email address
    to: 'recipient@example.com', // Replace with the recipient's email address
    subject: 'New message from contact form',
    text: message,
  };

  try {
    await sgMail.send(mailOptions);
    res.status(200).json({ success: 'Email sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
