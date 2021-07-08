const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');  
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');

// @route          GET api/movies
// @desc           Get all the user's movies 
// @access         Private
router.get('/' , auth , async (req , res)=> {
    try {
        const movies = await Movie.find({ user: req.user.id }).sort({ title: 1});
        res.json(movies);
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Server Error');
    }
});

// @route          POST api/movies
// @desc           Add a movie 
// @access         Private
router.post('/' , [ auth , [
    body('title', 'The movie title is required').not().isEmpty()
] ], async (req , res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { title, desc, rating, date_logged } = req.body;

    try {
        const newMovie = new Movie({
            title,
            desc,
            rating,
            date_logged,
            user: req.user.id
        });

        const movie = await newMovie.save()
        res.json(movie);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// @route          POST api/movies/:id
// @desc           Update a movie
// @access         Private
router.put('/:id' , (req , res)=> {
    res.send('Update movie');
});


// @route          Delete api/movies/:id
// @desc           Delete a movie
// @access         Private
router.delete('/:id' , auth ,async (req , res)=> {

    try {
     // Find the matching movie via the id
     let movie = await Movie.findById(req.params.id);

     if(!movie) return res.status(404).json({ message: 'Movie cannot be found.'});
 
     // Checks to see if the user owns this movie
     if(movie.user.toString() !== req.user.id)
     {
         return res.status(401).json({message : 'Not authorized'});
     }
 
     // Delete the movie from the user and the database
     await Movie.findByIdAndDelete(req.params.id);
     res.json({message: 'Movie removed'}); 

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;