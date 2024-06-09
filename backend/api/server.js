const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors({
//   origin: 'http://localhost:3000', // Allow only your frontend origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));

app.post('/api/contact', async (req, res) => {
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
      from: `${firstName} ${lastName} <${email}>`,
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
});



app.post('/api/newsletter', async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    const newsletterEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for subscribing to our newsletter",
      html: `<p>Thank you for subscribing to our newsletter. We will keep you updated with the latest news and opportunities.</p>`,
    };

    try {
      await newsletterEmail.sendMail(mail);
      res.status(200).json({ code: 200, status: "Subscription Confirmed" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});