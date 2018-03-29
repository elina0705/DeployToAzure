const mongoose = require('mongoose');
const bioModel = mongoose.model('bio');

const factList = function (req, res){
    bioModel.find({}, function(err, facts){
        if(err){
        res.status(404).json(err);
        }
    else{
        res.status(200).json(facts);
        }
});
};
const addFact = function (req, res){
    bioModel.create(req.body, function(err, newFact){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newFact);
        }
    });
};

module.exports = {
    factList,
    addFact
};