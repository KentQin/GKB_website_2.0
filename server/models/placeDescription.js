import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var placeDescritionSchema = new Schema({
    placeFullAddr: {type: String, require: true},
    user_email: {type: String, require: true},
    user_name: {type: String, require: true},
    description_content: {type: String, require: true},
    date: {type: Date},
    like: {type: Number}
});


module.exports = mongoose.model('DescriptionSchema', placeDescritionSchema);
