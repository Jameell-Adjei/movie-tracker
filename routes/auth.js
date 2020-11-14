const express = require('express');
const router = express.Router();

// @route          GET api/auth
// @desc           Get a logged in user
// @access         Private
router.get('/' , (req , res)=> {
    res.send('Get logged in user');
});


// @route          POST api/auth
// @desc           authenticate user & get token back
// @access         Public
router.post('/' , (req , res)=> {
    res.send('Login User');
});


module.exports = router;