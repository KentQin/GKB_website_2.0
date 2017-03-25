import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    accountType: {type: String, require: true},
    imageFile: {type: Object}
});

module.exports = mongoose.model('User', userSchema);
