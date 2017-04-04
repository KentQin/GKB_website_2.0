import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var elementSchema = new Schema({
    element: {type: String, require: true},
    name: {type: String, require: true},
});

module.exports = mongoose.model('Element', elementSchema);
