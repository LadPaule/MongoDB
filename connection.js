const mongoose = require('mongoose');
// connect to mongodb

//ES6 promises;
mongoose.Promise = global.Promise;

//connection to the DB before running the test;
mongoose.connect('mongodb://localhost/database');

mongoose.connection.once('open',function(){
   console.log('Connection has been made.... now tukonekitinge!');
}).on('error',function(error){
   console.log('Connection error:', error);
});