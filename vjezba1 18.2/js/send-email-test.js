const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'aleksandra_z92@msn.com',
        pass: 'Andrijana97',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'aleksandra_z92@msn.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};