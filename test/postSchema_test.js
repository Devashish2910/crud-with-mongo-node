// load assert and Users, Post
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

  it('Add Post to existing User', done => {
    const deva = new Users({
      name: 'Devashish',
      posts: [{title: 'First'}]
    });

    deva.save()
     .then(() => {
       Users.findById(deva._id)
        .then(user => {
          user.posts.push({title: 'New'});
          user.save()
           .then(() => {
             Users.findOne({name: 'Devashish'})
              .then(updatedUser => {
                console.log(updatedUser);
                const topEl = updatedUser.posts.length - 1;
                assert(updatedUser.posts[topEl].title === 'New')
                done();
              })
           })
        })
     });
  });
});
