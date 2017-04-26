import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var schema = new Schema({
    img: { data: Buffer, contentType: String }
});


//module.exports = mongoose.model('userModel', userSchema);
module.exports = mongoose.model('profile', schema);
