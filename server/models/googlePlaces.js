/*
 * googlePlaces contains 4 fields
 * addr: place full address
 * image: the image shot around the place, may not available, depends on Google
 * coords: the coordinates of the place
 * description: descriptions contributed by users for this place
 */

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var googlePlaceSchema = new Schema({
    addr: {type: String, require: true},
    image: {type: String},
    coords: {type: Object, require: true},
    description: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DescriptionSchema' }]
});

module.exports = mongoose.model('GooglePlace', googlePlaceSchema, 'googleplaces');
