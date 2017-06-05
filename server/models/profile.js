/*
 * profile contains 1 fields
 * img: this is an json object, data is the buffer of the profile file, contentType indicates the file's type, jpeg, png, etc.
 */

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var schema = new Schema({
    img: { data: Buffer, contentType: String }
});


//module.exports = mongoose.model('userModel', userSchema);
module.exports = mongoose.model('profile', schema);
