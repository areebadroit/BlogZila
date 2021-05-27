const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String },
  image: { type: String },
  body: { type: String },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'wordWrapUser',
    },
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'wordWrapComment',
    },
  ],
  created: { type: Date, default: Date.now },
});
const blogModel = mongoose.model('wordWrapBlog', blogSchema);
module.exports = blogModel;
