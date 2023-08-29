const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teachers", teacherSchema);
