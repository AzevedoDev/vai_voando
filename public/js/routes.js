const faker = require('faker');
const mail = require('./mail.js');

const appRouter = function (app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/sendMail', async (req, res) => {
    console.log('routes', req.body);
    var sendMailStatus = await mail.sendMail(req.body);
    console.log(sendMailStatus);
    if(sendMailStatus){
      console.log('felizzzzzzz');
      res.status(200).send({message: "weeeee"});
    } else {
      console.log('tristeeeee');
      res.status(400).send({message: "asdasasdadsasdasdadssdadasdasdadasd"});
    }
  });
}

module.exports = appRouter;