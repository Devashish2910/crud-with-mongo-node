const assert = require('assert');
const User = require('./../src/user');

describe('Virtual Type Test', () => {
  it('postCount Test: returns Number', (done) => {
    const deva = new User({
      name: 'Devashish',
      posts: [{title: 'First post'}, {title: 'Second Post'}],
    });

    deva.save()
     .then(user => {
       assert(user.postCount === deva.posts.length);
       done();
     })
  });
});
