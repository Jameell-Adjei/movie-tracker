const express = require('express');
const router = express.Router();

// @route          GET api/movies
// @desc           Get all the user's movies 
// @access         Private
router.get('/' , (req , res)=> {
    res.send('Get all movies');
});

// @route          POST api/movies
// @desc           Add a movie 
// @access         Private
router.post('/' , (req , res)=> {
    res.send('Add movie');
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
router.delete('/:id' , (req , res)=> {
    res.send('Delete movie');
});

module.exports = router;