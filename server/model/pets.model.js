const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name."],
        minlength: [3, "Pet name must be at least 3 characters."]
    },
    pettype: {
        type: String,
        requried: [true, "Pet type must be specified."],
        minlength: [3, "Pet type must contain at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Description of pet is required."],
        minlength: [3, "Description must contain at least 3 characters."]
    },
    skill1: {
        type: String,
        required: [false]
    },
    skill2: {
        type: String,
        required: [false]
    },
    skill3: {
        type: String,
        required: [false]
    },
})

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;