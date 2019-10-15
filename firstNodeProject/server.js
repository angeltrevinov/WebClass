const express = require('express'); //lets you run the server
const morgan = require('morgan'); //lets you log what requests are submitted
const bodyParser = require('body-parser');

const app  = express();

app.use(express.static('Front'));

app.use(morgan('dev'));
app.use(bodyParser.json()); //to decode the jsons from the bodys
app.use(bodyParser.urlencoded({ extend: false}));

let nameOfPets = [
    {
        name : "Burbuja",
        typeOfPet : "Dog"
    },
    {
        name : "Kia",
        typeOfPet : "Dog"
    },
    {
        name : "Jagger",
        typeOfPet : "Dog"
    },
    {
        name : "Kirby",
        typeOfPet : "Dog"
    }
];

app.get( '/api/pets', (req, res, next) =>{
    //return res.status(200).json( nameOfPets );
    console.log(req.params);
    return res.status(200).json( nameOfPets )
});

app.get( '/api/pets/ById', (req, res, next) =>{
    if(req.query.id ) {
        console.log( "Req param", req.query );
        return res.status(200).json( nameOfPets[req.query.id] );
    } else {
        return res.status(400).json({
            error: "No parameters"
        })
    }

});

app.post('/api/pets/addPet', (req, res, next) => {
    console.log(req.body);
    return res.status(200).send("hello world");
});


app.listen('8080', () => {
    console.log('App running on local host');
});
