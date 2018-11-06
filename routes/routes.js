const faker = require('faker');
const mail = require('./mail.js');

const appRouter = function (app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/sendMail', (req, res) => {
    console.log('routes', req.body);
    mail.sendMail(req.body);
    res.status(200).send('Email Sent');
  });

  app.get('/user', (req, res) => {
    const data = ({
      fisrtName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    });
    res.status(200).send(data);
  });

  app.get('/user/:num', (req, res) => {
    const users = [];
    const num = req.params.num;

    if (isFinite(num) && num > 0) {
      for (let i = 0; i <= num - 1; i += 1) {
        users.push({
          fisrtName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
        });
      }
      res.status(200).send(users);
    } else {
      res.status(400).send({
        message: 'invalid number supplied',
      });
    }
  });
};

module.exports = appRouter;