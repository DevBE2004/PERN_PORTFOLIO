"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Sử dụng SSL/TLS
  auth: {
    user: process.env.NODE_MAIL_USER,
    pass: process.env.NODE_MAIL_PASS,
  },
});

const sendMailCustom = async ({ email, name, description }) => {
  const info = await transporter.sendMail({
    from: email,
    to: process.env.TO_EMAIL,
    subject: `Email from ${name} ✔`,
    html: description,
  });
};

module.exports = sendMailCustom;
