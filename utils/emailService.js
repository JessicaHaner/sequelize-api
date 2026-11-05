
const { default: nodemailer } = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendVerificationEmail = async (email, verificationCode) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Verificação de Email - GT BEZERRA',
        html: `
            <h1>Verificação de Email</h1>
            <p>Seu código de verificação é: <strong>${verificationCode}</strong></p>
            <p>Este código expira em 20 minutos.</p>
            <p>Se você não solicitou essa verificação, por favor ignore este email.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (e) {
        console.log('Erro ao enviar email:', e);
        return false;
    }
};

module.exports = {
    sendVerificationEmail
};
