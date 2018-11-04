const nodeMaieler = require('nodemailer')
const email = module.exports

const trasnporter = nodeMaieler.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    secure: false,
    auth:{
        user: 'no-reaply@vaivoandoexpress.com.br',
        pass: 'Pa22101350'
    },
    tls: {rejectUnauthorized: false}
})

const mailOpitions = {
    from: 'no-reaply@vaivoandoexpress.com.br',
    to: 'pazevedo2210@gmail.com',
    text: 'bem facil, sera?'
}

trasnporter.sendMail(mailOpitions, (error,info)=>{
    if (error) {
        console.log(error);
        
    } else {
        console.log('Email enviado: ' + info.response);
        
    }
})

return module.exports