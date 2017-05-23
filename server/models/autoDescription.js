import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var autoDescriptionSchema = new Schema({
    element: {type: Number, require: true},
    type: {type: String, require: true},
    autoDescription: {type: String, require: true},
});

module.exports = mongoose.model('AutoDescription', autoDescriptionSchema, 'autoDescriptions');
