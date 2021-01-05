const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../middleware/auth');
const fetch = require('node-fetch');
// @route          GET api/movies
// @desc           Get all the user's movies 
// @access         Private
router.get('/:query/:page_number' , /*auth ,*/ async (req , res)=> {
    try {
        const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
        const fullUrl = baseUrl.concat(config.get('movieAPIKey') , '&language=en-US', '&page=', req.params.page_number,'&query=', req.params.query);
        debugger;
        const info = await fetch(fullUrl);
        const data = await info.json();
       
       res.send({total_pages: data.total_pages, results: data.results});
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Server Error');
    }
});

module.exports = router;