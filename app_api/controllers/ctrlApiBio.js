const mongoose = require('mongoose');
const bioModel = mongoose.model('bio');

const factList = function (req, res){
    res
        .status(200)
        .json({"fact": "fact2"});
};

const addFact = function (req, res){
    res.status(201).json({"Add fact" : "Fact"});
};

module.exports = {
    factList,
    addFact
};