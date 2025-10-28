import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD // App Password
      }
    });

    // Email to company
    const companyEmail = {
      from: process.env.EMAIL_USER,
      to: 'aubrynt.info@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Auto-reply to user
    const userEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting AUBRYNT AI',
      html: `
        <h2>Thank you for contacting AUBRYNT AI!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message regarding "${subject}" and appreciate you reaching out to us.</p>
        <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
        <p>In the meantime, feel free to explore our website for more information about our services and student programs.</p>
        <br>
        <p>Best regards,</p>
        <p>The AUBRYNT AI Team</p>
        <p>Website: https://aubrynt-ai.vercel.app</p>
        <p>Email: info@aubryntai.com</p>
        <p>Phone: +91 9704553949</p>
      `
    };

    // Send both emails
    await transporter.sendMail(companyEmail);
    await transporter.sendMail(userEmail);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
}
