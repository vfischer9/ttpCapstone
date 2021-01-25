const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({

    userFrom : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieID : {
        type:String
    },
    movieTitle : {
        type:String
    },
    movieImage : {
        type:String
    },
    movieRunTime : {
        type:String
    }

})



const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }