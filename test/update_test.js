// Test case for updating records

// load assert and Users
const assert = require('assert');
const Users = require('./../src/user');

describe('Update Records', () => {
  let deva;

  beforeEach(done => {
    deva = new Users({name: 'Devashish', likes: 0});
    deva.save()
     .then(() => {
       done();
     });
  });


  it('Model Instance set n save', done => {
    deva.set('name', 'Deva');
    deva.save()
     .then(() => {
       Users.find({})
        .then((users) => {
          assert(users.length === 1 && users[0].name === 'Deva');
          done();
        });
     });
  });

  it('Model Instance Update', (done) => {
    deva.update({ name: 'Devla'})
     .then(() => {
       Users.find({})
        .then((users) => {
          assert(users.length === 1 && users[0].name === 'Devla');
          done();
        });
     });
  });

  it('Class based Update', (done) => {
    Users.update({ name: 'Devashish'}, {name: 'Bhailu'})
     .then(() => {
       Users.find({})
        .then((users) => {
          assert(users.length === 1 && users[0].name === 'Bhailu');
          done();
        });
     });
  });

  it('Class based findOneAndUpdate', (done) => {
    Users.findOneAndUpdate({name: 'Devashish'}, {name: 'Geek'})
     .then(() =>{
       Users.find({})
        .then((users) => {
          assert(users.length === 1 && users[0].name === 'Geek');
          done();
        });
     });
  });

  it('Class based findByIdAndUpdate', (done) => {
    Users.findByIdAndUpdate(deva._id, {name: 'Pythonist'})
     .then(() => {
       Users.find({})
        .then((users) => {
          assert(users.length === 1 && users[0].name === 'Pythonist');
          done();
        });
     });
  });

  // Increment operator in mongodb
  it('Increment Likes', done => {
    Users.findByIdAndUpdate(deva._id, {$inc: {likes: 1}})
     . then((user) => {
       Users.findById(deva._id)
        .then(updatedUser => {
          assert(updatedUser.likes === (deva.likes + 1));
          done();
        });

     });
  });

});
