const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('The common middleware called');
    next();
});

app.use('/example', (req, res, next) => {
    console.log('The example middleware called');
    next(); 
});

app.get('/example/:Antton', (req, res) => {
    res.send('Hello ' + req.params.Antton);
    console.log('Hello ' + req.params.Antton);
});

app.get('/example2/:Antton/:Hatula', (req, res) => {
    res.send('Hello ' + req.params.Antton + " " + req.params.Hatula);
    console.log('Hello ' + req.params.Antton + " " + req.params.Hatula);
});

app.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body);
});

app.get('/example', (req, res) => {
    res.send('I am example');
    console.log('I am example');
});

app.listen(3000, () => {
    console.log('Port 3000');
});

