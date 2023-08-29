const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true
    },

    address: {
        type: String, 
        required: true
    },
    className: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("students", studentSchema)