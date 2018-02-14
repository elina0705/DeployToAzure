/* GET home page */
const container = function (req, res) {
    res.render('bio', {
        facts:
            [
                {fact: 'Matsumoto Hideto'},
                {fact: '13.12.1964 - 2.5.1998'},
                {fact: 'Guitarist in X Japan'},

            ]
    });
};
module.exports = {
    container
};