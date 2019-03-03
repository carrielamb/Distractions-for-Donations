var express = require('express');
var XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
        var data = "<findItemsAdvancedRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">  <itemFilter>    <name>CharityOnly</name>    <value>true</value>  </itemFilter>  <keywords>iphone</keywords>  <paginationInput>    <entriesPerPage>3</entriesPerPage>  </paginationInput>  <outputSelector>SellerInfo</outputSelector></findItemsAdvancedRequest>"
        var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status !== 200) {
	                res.send("The eBay API call failed");
                } else {
                    console.log("The eBay API request succeeded.")
                    var resultObj = JSON.parse(xmlhttp.responseText);
                    console.log(resultObj.findItemsAdvancedResponse.ack);
                    res.render('Items', { itemsFromeBay: resultObj.findItemsAdvancedResponse[0].searchResult[0].item});
                }
            }
        }
        xmlhttp.open("POST", "https://svcs.ebay.com/services/search/FindingService/v1");
        xmlhttp.setRequestHeader("X-EBAY-SOA-SECURITY-APPNAME", "EthanRub-Portal-PRD-716db7c91-dca7458e");
		xmlhttp.setRequestHeader("X-EBAY-SOA-OPERATION-NAME", "findItemsAdvanced");
		xmlhttp.setRequestHeader("X-EBAY-SOA-RESPONSE-DATA-FORMAT", "JSON");
		xmlhttp.send(data);
        // document.write("You have $" + money + " to Donate!");
        // Call API to donate to Charity or Add to cart or something
        // That happens here

    
});

module.exports = router;
