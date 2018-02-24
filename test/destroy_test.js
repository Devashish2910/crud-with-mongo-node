// test cases for removing data from database_name

// load assert and User model
const assert = require('assert');
const Users = require('./../src/user')

describe('Remove Data', () => {
  let deva;

  beforeEach((done) => {
    deva = new Users({name: 'Devashish'});
    deva.save()
     .then(user => {
       done();
     });
  });

  it('Model Instance Remove', done => {
    deva.remove()
     .then(() => {
       Users.findOne({name: deva.name})
        .then(user => {
          assert(user === null);
          done();
        });
     });
  });

  it('Class Method Remove', done => {
    Users.remove({name: 'Devashish'})
     .then(() => {
       Users.findOne({name: 'Devashish'})
        .then(user => {
          assert(user === null);
          done();
        });
     })
  });

  it('Class Method findOneAndRemove', done => {
    Users.findOneAndRemove({name: 'Devashish'})
     .then(() => {
       Users.findOne({name: 'Devashish'})
        .then(user => {
          assert(user === null);
          done();
        });
     });
  });

  it('Class Method findByIdAndRemove', done => {
    Users.findByIdAndRemove(deva._id)
     .then(() => {
       Users.findOne({_id: deva._id})
        .then(user => {
          assert(user === null);
          done();
        });
     });
  });

});
