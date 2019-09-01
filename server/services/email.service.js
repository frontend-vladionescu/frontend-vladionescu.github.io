const nodemailer = require('nodemailer');
const config = require('../../config/index');

const fromEmail = 'frontend.vlad.ionescu@gmail.com';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: config.gmailConfig
});

const generateConfirmationEmail = ({customer: {name, phone, email}, date, description, confirmationId}) => {
    const descr = description ? `Descrierea solicitarii este: ${description}` : 'Solicitarea nu contine descriere';
    return `
        <h3>Solicitare de programare la domnul notar Boca,</h3>
        
        <p>${name}, solicita programarea pe data de ${date}, datele de contact: telefon: ${phone}, email: ${email} </p>
        <p>${descr}</p>
        <form action="http://localhost:2000/schedule/confirm/${encodeURI(confirmationId)}" method="post">
            <button style="background-color: green; color: white; text-transform: uppercase; width: 150px; height: 40px; cursor: pointer;">confirma</button>
        </form> 
        <form action="http://localhost:2000/schedule/reject/${encodeURI(confirmationId)}" method="post">
           <button style="background-color: red; color: white; text-transform: uppercase; width: 150px;  height: 40px; cursor: pointer;">respinge</button>
        </form>
    `;
};

const generateCustomerConfirmedEmail = ({customer: {name}, date, confirmationId}) => {
    return `
        <h3>Buna ziua domnul/doamna ${name},</h3>
        
        <p>Va instiintam ca programarea dumneavoastra la Birou Notarial Boca si Asociatii din data de ${date} a fost confirmata</p>
        <p>Va asteptam cu drag in data de ${date}</p>
        
        <div>Cu stima,</div>
        <div>Echipa Boca si Asociatii</div>
    `;
};

const generateCustomerRejectionEmail = ({customer: {name}, date, confirmationId}) => {
    return `
        <h3>Buna ziua domnul/doamna ${name},</h3>
        
        <p>Va instiintam cu parere de rau ca programarea dumneavoastra la Birou Notarial Boca si Asociatii din data de ${date} a fost respinsa</p>
        
        <div>Cu stima,</div>
        <div>Echipa Boca si Asociatii</div>
    `;
};



const sendScheduleEventEmail = (event) => {
    const options = {
        from: fromEmail,
        to: fromEmail,
        subject: `Programare ${event.customer.name}`,
        html: generateConfirmationEmail(event)
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
            if (err) reject(err);
            else resolve(info);
        });
    })
};

const sendCustomerResponse = (event, isConfirmed) => {
    const htmlEmail =  isConfirmed? generateCustomerConfirmedEmail(event) : generateRejectionEventEmail(event);
    const options = {
        from: fromEmail,
        to: event.customer.email,
        subject: 'Confirmare programare',
        html: htmlEmail,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
            if (err) reject(err);
            else resolve(info);
        });
    })
};

module.exports = {
    sendScheduleEventEmail,
    sendCustomerResponse,
};
