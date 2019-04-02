const db = require('../../models');
const nodeMailer = require('nodemailer');
let key = process.env.GMAIL_NODE;
let user = process.env.GMAIL_USER;
module.exports = function(app) {
    app.post("/api/connects", (req, res) => {
        let newConnect = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nodemailermurn@gmail.com',
                pass: key
            }
        });
        const mailOptions = {
            from: newConnect.email,
            to: 'mattmurn@gmail.com',
            subject: `You recieved an inquiry from ${newConnect.name}`,
            text: newConnect.message
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){ throw error }
            else{
                console.log('Email sent: ' + info.response);
            }
        });
        db.Connects.create(newConnect).then(data => {
            // console.log(data);
        }).catch(error => console.log(error));
    })
}
