var mail = require("./mail.js");
var faker = require('faker');

var appRouter = function (app) {

    app.get('/', (req, res) => {
        res.render('index')
    });

    app.post('/sendMail', function (req, res) {
        console.log(req.body);
        mail.sendMail(req.body);
        res.status(200).send("Email Sent");
    });

    app.get('/user', function (req, res) {
        var data = ({
            fisrtName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        })
        res.status(200).send(data)
    });

    app.get('/user/:num', function (req, res) {
        var users = []
        var num = req.params.num;

        if (isFinite(num) && num > 0) {
            for (let i = 0; i <= num - 1; i++) {
                users.push({
                    fisrtName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                })
            }
            res.status(200).send(users)
        } else {
            res.status(400).send({ message: 'invalid number supplied' })
        }
    });

}

module.exports = appRouter