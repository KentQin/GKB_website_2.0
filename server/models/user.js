import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    accountType: {type: String, require: true},
    proImg: { data: {type: Buffer},
                contentType: {type: String} },
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


//module.exports = mongoose.model('userModel', userSchema);
module.exports = mongoose.model('user', userSchema);
