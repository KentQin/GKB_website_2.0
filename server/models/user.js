/*
 * user contains 8 fields
 * userName: the name of the user
 * email: the unique email address registered the account
 * password: the plain test is at least 8 characters, and is encrypted by one way encryption function, no one can recover the plain text
 * proImg: user profile image
 * contributions: an array, contains all the descriptions created by this user
 * searchHistory: an array, contains all the places searched by this user
 * favorites: an array, contains all the favorite places of this user
 */

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    accountType: {type: String, require: true},
    proImg: { data: {type: Buffer}, contentType: {type: String} },
    contributions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Element' }],
    searchHistory: [{
        // element: { type: mongoose.Schema.Types.ObjectId, ref: 'Element'},
        element: {type: String},
        searchStr: { type: String },
        date: { type: Date },
        type: {type: String}
    }],
    favorites: [{
        searchStr: { type: String},
        date: { type: Date},
        type: {type: String},
        image: {type: String},
        coords: {type: Object}
    }],
});

module.exports = mongoose.model('user', userSchema);
