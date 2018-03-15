const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({fact:String, info:String});
const discoSchema = new mongoose.Schema({year:String, publication:String});

mongoose.model('bio', bioSchema);
mongoose.model('discography', discoSchema);
