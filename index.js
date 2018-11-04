const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')


app.use(express.static('public'))




const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.render('index')
})
app.get()

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        
    }else{
        console.log('Umbler listening on port %s', port);
    }
})
