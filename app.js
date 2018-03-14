const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');

//connect to MongoDB:
const config = require('./config/database');

mongoose.connect(config.database);

//on connection:
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

//app setup:

//set up express:
const app = express();
const port = process.env.port || 8080;
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({extended: true}));

//set routes:
app.use('/api', require('./routes/api'));

app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//error handling:
app.use( (err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
});

//start server notification:
app.listen(port, () => {
    console.log("Started server on port " + port);
});
