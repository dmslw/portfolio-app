const dotenv = require('dotenv')
dotenv.config()
module.exports.mail = async (req) => {

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        }

    })

    let mailOptions = {

        from: 'portfolioapp771@gmail.com',
        to: 'portfolioapp771@gmail.com',
        subject: `Email from ${req.body.name}. Email address ${req.body.email}`,
        text: `Subject of the message ${req.body.subject}. Message - ${req.body.message}`

    }

    let info = await transporter.sendMail(mailOptions)

    return info.messageId

}
