const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')


app.use(express.static('public'))




const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        
    }else{
        console.log('Umbler listening on port %s', port);
    }
})

// const nodeMaieler = require('nodemailer')

// const trasnporter = nodeMaieler.createTransport({
//     host: 'smtp.umbler.com',
//     port: 587,
//     secure: false,
//     auth:{
//         user: 'no-reaply@vaivoandoexpress.com.br',
//         pass: 'Pa22101350'
//     },
//     tls: {rejectUnauthorized: false}
// })

// const mailOpitions = {
//     from: 'no-reaply@vaivoandoexpress.com.br',
//     to: 'pazevedo2210@gmail.com',
//     text: 'bem facil, sera?'
// }

// trasnporter.sendMail(mailOpitions, (error,info)=>{
//     if (error) {
//         console.log(error);
        
//     } else {
//         console.log('Email enviado: ' + info.response);
        
//     }
// })





