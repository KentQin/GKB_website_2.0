import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    accountType: {type: String, require: true},
    imageFile: {type: Object},
    contributions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Element' }],
    searchHistory: [{
                      element: { type: mongoose.Schema.Types.ObjectId, ref: 'Element'},
                      searchStr: { type: String }
                   }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Element'}]
});


<<<<<<< HEAD
=======
//module.exports = mongoose.model('userModel', userSchema);
>>>>>>> 77748fcb72c9d579b6ce9d8f97dece457a86020e
module.exports = mongoose.model('user', userSchema);

