const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mail = {
      from: `${firstName} ${lastName}`,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ code: 200, status: "Message Sent" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
