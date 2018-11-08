const nodeMaieler = require('nodemailer');
const trasnporter = nodeMaieler.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    secure: false,
    auth: {
        user: 'no-reaply@vaivoandoexpress.com.br',
        pass: 'Pa22101350'
    },
    tls: {
        rejectUnauthorized: false
    }
});

 exports.sendMail = async function (body) {
    console.log("Starting Send Mail")
    let date = {
        completeName: body.completeName,
        emailContato: body.emailContato,
        telefone: body.telefone,
        endColeta: body.endColeta,
        cepColeta: body.cepColeta,
        endEntrega: body.endEntrega,
        cepEntrega: body.cepEntrega,
        qtdVolumes: body.qtdVolumes,
        peso: body.peso,
        alturaProd: body.alturaProd,
        larguraProd: body.larguraProd,
        comprimentoProd: body.comprimentoProd,
        valor: body.valor
    };
    mailOptions = {
        from: 'no-reaply@vaivoandoexpress.com.br',
        to: 'pazevedo2210@gmail.com',
        html: Object.entries(date).reduce((acc, [key, value]) => (
            `${acc}<p><strong>${key}:</strong>${value}</p><br />`
        ), '')
    };
    console.log("mailOptions:" + mailOptions);

    let mailStatus;
    try{
        mailStatus = await trasnporter.sendMail(mailOptions);
    } catch (e) {
        console.log(e);
    }
    console.log("mailStatus:" + mailStatus)
    return mailStatus;
};



async function asynSendMail(mailOptions){
    var s = trasnporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error: " + error + " - " + info);
            return false;
        } else {
            console.log("Success");
            return true;
        }
    });
    return await s;
}
