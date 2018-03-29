const mongoose = require('mongoose');
const discoModel = mongoose.model('discography');

const discoList = function (req, res){
    discoModel.find({}, function(err, records){
    if(err){
        res.status(404).json(err);
    }
    else{
        res.status(200).json(records);
    }
});
};

const addRecord = function (req, res){
    discoModel.create(req.body, function(err, newRecord){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newRecord);
        }
    });
};

module.exports = {
    discoList,
    addRecord
};