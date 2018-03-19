const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const config = require('../config/database');

//models:
const Quote = require('../models/money');
const User = require('../models/user');
const Item = require('../models/quotationData');

//default route:
router.get('/', (req, res, next) => {
    res.send('Nothing on this end of the web');
});

//new user:
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, message: 'Failed to register user'});
        }else{
            res.json({success: true, message: 'User has been registered'});
        }
    });
});

//authenticate:
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({success: false, message: 'No one with such a username exists'});

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) res.json({success: false, message: 'A lock needs its own key. Enter the correct password'});
            if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
        });
    });
});

//get all quotations created by current user:
router.get('/dashboard/:user', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Quote.getAll(req, res);
});

//new quotation:
router.post('/quote', (req, res, next) => {
    Quote.createQuote(req, res);
});

//edit old quotation:
router.put('/quote/:id', (req, res, next) => {
    res.send({
        type: 'PUT (update)'
    });
});

//delete quotation document:
router.delete('/quote/:id', (req, res, next) => {
    Quote.deleteOne(req, res);
});

//type of crew:
router.get('/quote/crewdata', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Item.getCrewData(res);
});

//type of equipment:
router.get('/quote/equipmentdata/', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Item.getEquipmentData(res);
});

module.exports = router;
