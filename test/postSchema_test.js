// load assert and Users
const assert = require('assert');
const Users = require('./../src/user');

describe('Subdocument Test', () => {
  it('PostSchema', done => {
    const deva = new Users({
      name: 'Devashish',
      posts: [{title: 'First Post'}]
    });

    deva.save()
     .then(() => {
       Users.findById(deva._id)
        .then(user => {
          assert(user.posts[0].title === 'First Post');
          done();
        });
     });
  });
});
