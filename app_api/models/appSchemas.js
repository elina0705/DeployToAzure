const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({fact:String});
const discoSchema = new mongoose.Schema({year:String, name:String});

mongoose.model('bio', bioSchema, 'bio');
mongoose.model('discography', discoSchema, 'discography');
