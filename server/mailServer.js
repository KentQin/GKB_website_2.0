import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gkbofficial356@gmail.com',
        pass: 'gkbunimelb'
    }
});

module.exports = transporter
