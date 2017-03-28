import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    accountType: {type: String, require: true},
    imageFile: {type: String}
});

module.exports = mongoose.model('User', userSchema);
