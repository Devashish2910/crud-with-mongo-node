// Check Mongoose connection with MongoDB

// load mongoose
const mongoose = require('mongoose');

// set Promises because mongoose does not support the promises
mongoose.Promise = global.Promise;

// connection with MongoDB (mongodb://localhost or remote port/database_name)
mongoose.connect('mongodb://localhost:27017/users_test', { useMongoClient: true });

// check connection with once and on event handler
mongoose.connection
 .once('open', () => {
   console.log("Connected!");
 })
 .on('error', (err) => {
   console.warn(`Warning: {err}`);
 });

// Hook for dropping database before each test case
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  })
})
