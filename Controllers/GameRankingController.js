var express = require('express');
var router = express.Router();
var moment = require('moment');

router.get('/ranking-data', function(req,res){
    let ctime = moment().format('YYYYMMDD');
    res.render("gameranking.ejs", {ctime:ctime});
});

module.exports = router;