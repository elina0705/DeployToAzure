const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({fact:String, info:String});
const discoSchema = new mongoose.Schema({year:String, publication:String});

mongoose.model('bio', bioSchema, 'bio');
mongoose.model('discography', discoSchema, 'discography');
