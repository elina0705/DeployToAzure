const request = require('request');
const apiURL = require('./apiURLs');

const contain = function (req, res) {
 /*  res.render('bio', {
        facts:
            [
                {fact: 'Matsumoto Hideto'},
                {fact: '13.12.1964 - 2.5.1998'},
                {fact: 'Guitarist in X Japan'},

            ]
    });*/
 const path = '/api/bio';
 const requestOptions = {
     url : apiURL.server + path,
     method : 'GET',
     json: {},
     qs : {}
 };
 request(
     requestOptions,
     function (err, response, body){
         if (err){
             res.render('error', {message: err.message});
         } else if (response.statusCode !== 200){
             res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " (" +response.statusCOde + ")"});
         } else if (!(body instanceof Array)) {
             res.render('error', {message: 'Unexpected response data'});
         } else if (!body.length){
             res.render('error', {message: 'No documents in collection'});
         } else {
             res.render('bio', {facts: body});
         }

     }
 )
};
module.exports = {
    contain
};