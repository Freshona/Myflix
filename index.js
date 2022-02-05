//import express
const express = require('express');

//import morgan
const morgan = require('morgan');

//error handling import and definition
const bodyParser = require('body-parser');
methodOverride = require ('method-override')

const app = express();

/*
let topMovies = [
    {
        title:'what the hell was I thinking - Realisations of new parenthood',
        author: 'every new mother everywhere'
    },

    {
        title: 'These damn kids',
    author: ' a tired black woman'
    },

    {
        title: 'pick your toys for the doggone last time',
        author: 'another stressed mother somewhere'
    },

    {
        title: ' I am not a short order cook',
        author: ' a mother on her very last nerve'
    },

    {
         title: 'leave your sibling alone',
         author: 'mothers everywhere'
     },
     
     {
         title: 'wait till your daddy comes home',
         author: ' a mother with false hopes of redemption'
     },

     {
        title: 'watching your husband sleep',
        author: 'mothers during those nighttime feeding sessions'
     }

];*/

// app.use to invoke morgan middleware function
app.use(morgan('common'));


// GET with URL end as root directory with a message
app.get('/', (req, res) => {
    res.send('Welcome to my movie app for moms!')
});

//GET request
app.get('/movies', (req, res) => {
res.json(topTenMovies);
});

// Serve currently static content from a folder
app.use(express.static('public'));


//error handling with logging to stack
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
    console.error(err, stack); 
    res.status(500).send('Lost in Translation');
});


app.listen(8080, () => {
    console.log('Myflix is listening on port 8080.');
});