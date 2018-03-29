const mongoose = require('mongoose');
const discoModel = mongoose.model('discography');

const discoList = function (req, res){
    res
        .status(200)
        .json({"year": "release"});
};

const addRecord = function (req, res){
    res.status(201).json({"Add release" : "Record"});
};

module.exports = {
    discoList,
    addRecord
};