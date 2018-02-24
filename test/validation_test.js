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
   })
});
