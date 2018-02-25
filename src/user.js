// Create a User Collection

// load mongoose
const mongoose = require('mongoose');
// Schema for the collection
const Schema = mongoose.Schema;
// import PostSchema
const PostSchema = require('./post_schema');

// Schema set up
const UserSchema = new Schema({
  //Properties: types of properties
  name: {
    type: String,
    required: [true, 'No Name!!'],
    minlength: [3, 'Name must be more than 2 char long']
  },
  posts: [PostSchema],
  likes: Number
});

// Virdtual Schema
UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});
// Create a model
const User = mongoose.model('users', UserSchema);

// Export User to use it
module.exports = User;
