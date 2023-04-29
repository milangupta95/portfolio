require('dotenv').config;
export default function(req, res) {
    try {
        const { name, email, message } = req.body;
        let nodemailer = require('nodemailer');
        console.log(process.env.email + " " + process.env.password);
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: "milangupta95",
                pass: process.env.password,
            },
            secure: true,
        })
        const mailData = {
            from: process.env.email,
            to: email,
            subject: `Thanks for your Feedback`,
            text: req.body.message + " | Sent from: " + req.body.email,
            html: `<div>${"We Have Recieved Your Feedback"}</div><p>Sent from:
    ${req.body.email}</p>`
        }
        transporter.sendMail(mailData, function (err, info) {
            if (err){
                res.status(400).json({
                    message: "Not Send"
                })
            }
            else{
                res.status(200).json({
                    message: "Send SuccessFull"
                })
                console.log("Send SuccessFully")
            }
        })
    } catch (err) {
        res.status(400).json({
            message: "NOT ABLE TO SEND MAIL"
        })
    }
}