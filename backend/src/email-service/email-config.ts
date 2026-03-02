import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "dev.yogeshavadhut@gmail.com",
    pass: "miqf twgl nshs ixfd",
  },
});

const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: "dev.yogeshavadhut@gmail.com",
    to: "digitalyogi123@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent:", info.messageId);
};



export {transporter}