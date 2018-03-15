const mongoose = require('mongoose');

const dbURI = 'mongodb://vordai:meancoursepass1@ds113849.mlab.com:13849/meancourse';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ${dbURI}');
});
mongoose.connection.on('error', function(err){
console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');