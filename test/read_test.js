// Test case for reading user from database
// (by username and Id)

// load assert and User
const assert = require('assert');
const User = require('./../src/user');

describe('Read Records', () => {
  let dava;

  beforeEach(done => {
    deva = new User({name: 'Devashish'});
    deva.save()
      .then(() => {
        done()
      });
  });

  it('Find all user by Name', (done) => {
    User.find({name: 'Devashish'})
      .then(users => {
        assert(users[0]._id.toString() === deva._id.toString());
        done();
      });
  });

  it('Find user by Id', (done) => {
    User.findOne({_id: deva._id, name: deva.name})
      .then(user => {
        assert(user._id.toString() === deva._id.toString())
        done();
      });
  });
});
