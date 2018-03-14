const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');

//connect to MongoDB:
mongoose.connect('mongodb://localhost/quoter');
mongoose.Promise = global.Promise;

//app setup:

//set up express:
const app = express();
const port = process.env.port || 8080;

//view engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static stuff:
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//set routes:
app.use(express.static(path.join(__dirname, 'client')));
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));

//error handling:
app.use( (err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
});

//start server notification:
app.listen(port, () => {
    console.log("Started server on port " + port);
});
