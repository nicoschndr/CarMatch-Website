const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({origin: "*"}))
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'dist/car-match-website')));

app.get("*", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'dist/car-match-website/index.html'));
})
app.post('/send-email', (req, res) => {
  const {firstName, lastName, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nicoschneider9809@gmail.com',
      pass: 'qdbxklpvzdnhdzjq'
    }
  });

  const mailOptions = {
    from: 'nicoschneider9809@gmail.com',
    to: 'nicoschneider9809@gmail.com',
    subject: firstName, lastName, email,
    text: message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail erfolgreich versendet: + ' + info.response);
  })
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
})
