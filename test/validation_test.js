// Test cases for VALIDATION

// load assert and User
const assert = require('assert');
const User = require('./../src/user');

describe('Validate Record', () => {
   it('Name Validation Check', (done) => {
     const user = new User({name: undefined});
     const validation = user.validateSync();
     const {message} = validation.errors.name;
     assert(message === 'No Name!!');
     done();
   });

   it('Name Length Check', done => {
     const user = new User({name: 'D'});
     const validation = user.validateSync();
     const {message} = validation.errors.name;
     assert(message === 'Name must be more than 2 char long')
     done();
   });

   it('Stop adding record due to less length', done => {
     const user = new User({name: 'D'});
     user.save()
      .then()
      .catch(validation => {
        const {message} = validation.errors.name;
        assert(message === 'Name must be more than 2 char long')
        done();
      });
   });

   it('Stop adding record due to no name', done => {
     const user = new User({name: undefined});
     user.save()
      .then()
      .catch(validation => {
        const {message} = validation.errors.name;
        assert(message === 'No Name!!')
        done();
      });
   });
});
