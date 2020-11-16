const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  
const config = require('config');  
const User = require('../models/User');

const auth = require('../middleware/auth');

// @route          GET api/auth
// @desc           Get a logged in user
// @access         Private
router.get('/' , auth, async (req , res)=> {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json({ user })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// @route          POST api/auth
// @desc           authenticate user & get token back
// @access         Public
router.post('/' , [
    body("email" , "Please enter in a valid email").isEmail(),
    body("password" , "Password is required").exists()


], async (req , res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email , password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({message: 'Invalid Credentials'});
        }
        const matched = await bcrypt.compare(password , user.password);

        if(!matched){
            return res.status(400).json({message: 'Invalid Credentials'}) 
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (error , token)=>{
            if(error) throw error;
            res.json({ token })

        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
});


module.exports = router;