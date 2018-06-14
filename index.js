const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const db = require('./models');
const nodeMailer = require('nodemailer');
require('dotenv').config();

let key = process.env.GMAIL_NODE;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
// app.get('/', (req, res) => {
//     console.log("this is working properly");
// });

app.post("/api/connects", (req, res) => {
  let newConnect = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
}



  const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nodemailermurn@gmail.com',
          pass: "Jordan#23"
      }
  });

  const mailOptions = {
      from: newConnect.email,
      to: 'mattmurn@gmail.com',
      subject: `You recieved an inquiry from ${newConnect.name}`,
      text: newConnect.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if(error){ throw error }
    else{
        console.log('Email sent: ' + info.response);
    }
})
  db.Connects.create(newConnect).then(data => {
      // console.log(data);
  })
//   .then(


// )

})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});




db.sequelize.sync().then(() => {
  app.listen(PORT, () =>{
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
})