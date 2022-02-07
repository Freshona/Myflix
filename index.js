//import express
const express = require('express');

//import morgan
const morgan = require('morgan');

//error handling import and definition
const bodyParser = require('body-parser');
uuid = require('uuid');
methodOverride = require ('method-override');

const app = express();

app.use(bodyParser.json());

let topMovies = [
    {
        id: 1,
        title:'what the hell was I thinking - Realisations of new parenthood',
        description:{
            director : 'every new mother everywhere',
            genre: 'drama',
            length:'45 minutes'
        } 
        
    },

    {
        
        id: 2,
        title: 'These damn kids',
        description: {
          director: ' a tired black woman',
          genre: 'melodrama',
          length: '2 hrs'
            } 
      
    },

    {
        id: 3,
        title: 'pick your toys for the doggone last time',
        description: {
            title: 'another stressed mother somewhere',
            genre: 'dark comedy',
            length: '24 hours'
        }
    },
    
    {
        
        id: 4,
        title: ' I am not a short order cook',
        description: {
            director: ' a mother on her very last nerve',
            genre: 'fiction',
            length: '67 minutes'
        } 
    },

    {
        id: 5, 
        title: 'leave your sibling alone',
         description :
         {
           director: 'mothers everywhere',
            genre: 'fantasy',
            length: ' 23 minutes'
         } 

     },
     
     {
        id: 6, 
        title: 'wait till your daddy comes home',
         description: {
            director: ' a mother with false hopes of redemption',
            genre: 'suspense comedy',
            length: '45 minutes'
     }

    },


     {
        
        id: 7,
        title: 'watching your husband sleep',
        description: {
            description:'mothers during those nighttime feeding sessions',
            genre : 'mystery thriller',
            length: '12 hours'
        } 
     }

    ]

//REST and API section

//gets a list of all the movies
//movies 
app.get('/movies', (req, res) =>  {
    res.json(topMovies);
});

// gets data about a single movie by title with text on availability
//movies/title
app.get('/movies/:title', (req, res) => {
    res.json(topMovies.find((movie) =>
    { return movie.title === req.params.title }));

    /*if (movie) {
        movies = topMovies.filter((obj) => {
            return obj.title !== req.params.title
        });
        res.status(201).send('Movie ' + req.params.title + 'is available')
        
    }*/
});

//returns data about a genre by movie name
// /movies/title/description/
 app.get('/movies/:title/:genre', (req, res) => {
    res.json(topMovies.find((movieGenre) => {
        return movieGenre.genre === req.params.genre}));
});


// returns data about a director (bio, year death) by name
    //movies/description/director
app.get('/movies/:description/:director', (req, res) => {
    res.json(topMovies.find((movieDirector) =>
    {return movieDirector.director === req.params.director }));
});

// add new user
//users
app.post('/users', (req, res) => {
    let newUser = req.body;

    if (!newUser.name) {
        const message = 'Missing name in request body';
        res.status(400).send(message);
    } else {
        newUSer.id = uuid.v4();
        movies.push(newUser);
        res.status(201). send(newUser);
    }
});


//allow user to update their user info(Username) .
//users/user/name/
app.put('/users/:name', (req, res) => {
    let user = users.find((userName) => {
        return userName.name === req.params.name
    });

    if (user) {
        user.userInformation[req.params.information] = parseInt(req.params.name);
        res.status(201).send('User '+ req.params.name + 'has been updated')
    } else {
        res.status(404).send('User with name ' + req.params.name + ' was not found. ')
    }
});

//adds data for a new favourite movie for users  with a confirmation text
// /users/favourite movie
app.put('/users/:favouriteMovies', (req, res) => {
    let newFavMovie = topMovies.find((newFavMovie) => {
        return movie.title === req.params.title
    });

    if (!newFavMovie) 
        { 
            newFavMovie.movieDescription[req.params.description] = parseInt(req.params.favouriteMovies);
            res.status(201).send('A New Favourite Movie ' + req.params.title + 'has been added to ' + req.params.favouriteMovies + 'your watch-list')
            const message ='missing name in request body';
        } else
            res.status(404).send('Movie with the title ' + req.params.title + ' was not found. ');

    
}); 


// allow users to remove movie by movie title from favourite watch list 
app.delete('/users/:favouriteMovies/:title', (req, res) => {
    let delMovie = topMovies.find((delMovie) => {
        return movie.title === req.params.title
    });

    if (delMovie) {
        movies = topMovies.filter((obj) => {
            return obj.title !== req.params.title
        });
        res.status(201).send('Formely favourite movie ' + req.params.title + ' was deleted. ');
    }
});


//allow user to deregister by ID
app.delete('/users/:id', (req, res) => {
    let user = users.find((user) => {
        return user.id === req.params.id
    });

    let users = users.filter((obj) => {
            return obj.id !== req.params.id
        });
        res.status(201).send('User ' + req.params.id + ' was deleted. ');
    }
);


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


app.use(methodOverride());

app.use((err, req, res, next) => {
    console.error(err, stack); 
    res.status(500).send('Lost in Translation');
});


app.listen(8080, () => {
    console.log('Myflix is listening on port 8080.');
});