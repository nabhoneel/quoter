const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'An email ID is necessary']
    },
    username: {
        type: String,
        required: [true, 'A unique username is necessary']
    },
    password: {
        type: String,
        required: [true, 'A password is necessary for securing the account']
    }
});

const User = mongoose.model('users', userSchema);//collection, schema

module.exports = User;

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) callback(err, isMatch);
        callback(null, isMatch);
    });
}
