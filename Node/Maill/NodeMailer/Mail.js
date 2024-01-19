const {
    parse
} = require('querystring');
const Nodemailer = require("nodemailer");
const {
    auth
} = require("./auth.js")
const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth
})

const Mail = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const formData = parse(body);
        const submittedMessage = formData.content || 'No message submitted';
        const mailOption = {
            from: auth.user,
            to: formData?.email ?? "thanumahee440@gmail.com",
            subject: "Test Nodemailer",
            text: submittedMessage
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        transporter.sendMail(mailOption, (error, info) => {
            if (error)
                res.end('<p>Failed message</p>');
            else
            res.end('<p>sent message</p>');
        })


    });
}
module.exports = Mail;
