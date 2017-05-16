import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var placeDescritionSchema = new Schema({
    placeFullAddr: {type: String, require: true},
    user_id: {type: String, require: true},
    user_name: {type: String, require: true},
    description_content: {type: String, require: true},
    date: {type: Date},
    like: {type: Number},
    user_like_array: [{type: String, require: true}]
});


module.exports = mongoose.model('DescriptionSchema', placeDescritionSchema);
