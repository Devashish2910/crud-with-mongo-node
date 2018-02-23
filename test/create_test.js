// test case to check user is inserted or not

// load assert
const assert = require('assert');

// load User
const User = require('./../src/user');

// test case
describe('Creating Documents', () => {
  it('Saves a user', (done) => {
    //instance of user
    const deva = new User({name: 'Devashish'});

    // insert instance to database
    deva.save()
     .then(() => {
       assert(!deva.isNew);
       done();
     });
  });
});
