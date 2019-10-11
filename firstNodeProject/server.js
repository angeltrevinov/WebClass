const express = require('express'); //lets you run the server
const morgan = require('morgan'); //lets you log what requests are submitted

const app  = express();

app.use(morgan('dev'));


app.get('/api/noe/:id', (req, res, next) => {
    console.log(req.params.id);
    return res.status(200).json({
        message: 'nmms que loco'
    });
});

app.listen('8080', () => {
    console.log('App running on local host');
});
