const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    dob: {
      type: Date,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model('wordWrapUser', userSchema);

module.exports = userModel;
