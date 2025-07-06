const express = require("express");
const router = express.Router();
const Contact = require("../schema/contactSchema");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

router.post("/contact-us", async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;
    const contact = new Contact({ name, email, mobile, subject, message });
    await contact.save();

    await transporter.sendMail({
      from: `"${name}"<${email}>`,
      to: process.env.MY_GMAIL_EMAIL,
      subject: `New Contact Message: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`,
    });

    await transporter.sendMail({
      from: `"Your Company" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out. We'll get back to you soon.\n\n— Your Company`,
    });

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Server Error", error: e });
  }
});

module.exports = router;
