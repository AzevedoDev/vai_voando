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


const mailOpitions = {
  from: 'no-reaply@vaivoandoexpress.com.br',
  to: 'pazevedo2210@gmail.com',
  text: ''
};

trasnporter.sendMail(mailOpitions, (error, info) => {
  if (error) {
    console.log(error);

  } else {
    console.log('Email enviado: ' + info.response);

  }
});

exports.sendMail = function (body) {
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
  console.log(date.completeName);
};
