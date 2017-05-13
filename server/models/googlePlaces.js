import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var googlePlaceSchema = new Schema({
    addr: {type: String, require: true},
    image: {type: String},
    coords: {type: Object, require: true},
    date: {type: Date, require: true},
    description: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DescriptionSchema' }]
});

module.exports = mongoose.model('GooglePlace', googlePlaceSchema, 'googleplaces');
