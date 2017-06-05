/*
 * placeDescriptionSchema contains 7 fields
 * placeFullAddr: described place's full address
 * user_id: indicates the contributor
 * user_name: indicated the contributor's name
 * description_content: the content
 * date: created date
 * like: a number to indicate how many users like this description
 * user_like_array: an array, contains all user who likes this description, to forbid those users repeat the like action
 */

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var placeDescriptionSchema = new Schema({
    placeFullAddr: {type: String, require: true},
    user_id: {type: String, require: true},
    user_name: {type: String, require: true},
    description_content: {type: String, require: true},
    date: {type: Date},
    like: {type: Number},
    user_like_array: [{type: String, require: true}]
});


module.exports = mongoose.model('DescriptionSchema', placeDescriptionSchema);
