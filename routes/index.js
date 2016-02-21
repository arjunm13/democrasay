var express = require('express');
var router = express.Router();

var agree=0; 
var disagree=0;
var agreepercent = 0;
var disagreepercent = 0;
var total=0;

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', 
agree: agreepercent,
disagree: disagreepercent});
});

router.get('/agree', function(req, res, next) {
	total = total +1;
	agree = agree +1;
	disagreepercent = (disagree / total)*100;
	agreepercent = (agree / total)*100;
	disagreepercent = disagreepercent.toFixed(2);
	agreepercent= agreepercent.toFixed(2);

	console.log(agree);
  res.render('index', { title: 'Express', 
agree: agreepercent,
disagree: disagreepercent});
});
router.get('/disagree', function(req, res, next) {
	total = total +1;
	disagree = disagree +1;
	agreepercent = (agree / total)*100;
	disagreepercent = (disagree / total)*100;
	disagreepercent = disagreepercent.toFixed(2);
	agreepercent= agreepercent.toFixed(2);
	console.log(disagree);
  res.render('index', { title: 'Express', 
agree: agreepercent,
disagree: disagreepercent});
});



module.exports = router;
