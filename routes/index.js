var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	console.log("So far ch1");

    function getAllUrlParams() {
        
        var arr = req.url.split('=')[1];
        return arr;
    }
    console.log(getAllUrlParams());
    console.log("So far ch2");
    var timeSpent = 5;
    //if (getAllUrlParams().Time !== undefined) {
	  //  timeSpent = getAllUrlParams().Time;
    //}
    var str = 'You have $' + getAllUrlParams() + ' to donate';
    console.log(str);
    res.render('index2', { passedFromController: str });

});

module.exports = router;
