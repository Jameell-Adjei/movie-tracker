const express = require('express');

const app = express()

const PORT = process.env.PORT || 5000;


app.get('/' , (req, res)=> res.json({message: 'Welcome to the Movie Tracker'}));


// Creating Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movies'));

app.listen(PORT , console.log(`Server started on Port ${PORT}`));