const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/send-email', async(req, res) => {

    //console.log(req.body);

    const {name, email, phone, message} = req.body;

    contentHTML = `
    
        <h3>Información del contacto.</h3>
        <ul>
            <li>Nombre : ${name}</li>
            <li>Email : ${email}</li>
            <li>Teléfono : ${phone}</li>
            
        </ul>

        <h5>Mensaje :</5>
        <p>${message}</p>
    
    `;
    
    const transporter = nodemailer.createTransport({

        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user:'info@hogar-emanuel.com',
            pass: 'Alejandr0'
        },
        tls: {

            rejectUnauthorizes: false
        }
    });

    const info = await transporter.sendMail({

        from: "'Tech Server' <info@hogar-emanuel.com>",
        to: 'contacto@hogar-emanuel.com',
        subject: 'Formulario Web',
        html: contentHTML

    });

    console.log('Message sent', info.messageID);
    res.redirect('http://correo.hogar-emanuel.com');


})

module.exports = router;