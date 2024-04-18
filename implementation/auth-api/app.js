const express = require('express');

const app = express();
app.use(express.json());

// Used for health check
app.get('/', (req, res) => {
    res.send({});
})

// Configuring routes
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/user', require('./routes/user'));

module.exports = app;
