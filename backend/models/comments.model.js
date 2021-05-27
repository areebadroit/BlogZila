var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  text: { type: String },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'wordWrapUser',
    },
    username: { type: String },
    name: { type: String },
  },
});

const commentModel = mongoose.model('wordWrapComment', commentSchema);
module.exports = commentModel;
