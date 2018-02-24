// Create a User Collection

// load mongoose
const mongoose = require('mongoose');
// Schema for the collection
const Schema = mongoose.Schema;

// Schema set up
const UserSchema = new Schema({
  //Properties: types of properties
  name: {
    type: String,
    required: [true, 'No Name!!'],
    minlength: [3, 'Name must be more than 2 char long']
  },
  postCount: Number
});

// Create a model
const User = mongoose.model('users', UserSchema);

// Export User to use it
module.exports = User;
