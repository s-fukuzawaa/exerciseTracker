const { Schema } = require("mongoose");
var mongoose = require('mongoose');


const exerciseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;

// crud: create, read update, delete