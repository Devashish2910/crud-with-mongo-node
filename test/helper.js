// Check Mongoose connection with MongoDB

// load mongoose
const mongoose = require('mongoose');

// connection with MongoDB (mongodb://localhost or remote port/database_name)
mongoose.connect('mongodb://localhost/users_test');

// check connection with once and on event handler
mongoose.connection
 .once('open', () => {
   console.log("Connected!");
 })
 .on('error', (err) => {
   console.warn(`Warning: {err}`);
 });
