/* GET home page */
const contain = function(req, res){
    res.render('discography',{
        albums:
        [
            {year:'1994', name:'Hide Your Face',},
            {year:'1996', name:'Psyence',},
            {year:'1998', name:'Ja, Zoo'},
        ],

    singles:
        [
            {year:'1993', name:'Eyes Love You',},
            {year:'1993', name:'50% & 50%',},
            {year:'1994', name:'Dice'},
            {year:'1994', name:'Tell Me'},
            {year:'1996', name:'Misery'},
            {year:'1996', name:'Beauty & Stupid'},
            {year:'1996', name:'Hi-Ho / Good Bye'},
            {year:'1998', name:'Rocket Dive'},
            {year:'1998', name:'Pink Spider'},
            {year:'1998', name:'Ever Free'},
            {year:'1998', name:'Hurry Go Round'},
            {year:'2002', name:'In Motion'},
        ]});
};
module.exports = {
    contain
};