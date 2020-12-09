const express = require('express');
const PlayerRoute = require('./Routes/Players');
const GroupRoute = require('./Routes/Groups');
const TeamRoute = require('./Routes/Teams');
const mongoose = require('mongoose');
const { mongoURL } = require('./config');

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) {
        console.log('MongoDB connection error: ', err.message);
    } else {
        console.log('Database connected...');
    }
})

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    next();
});

app.use('/api/player', PlayerRoute);
app.use('/api/group', GroupRoute);
app.use('/api/team', TeamRoute);

module.exports = app;