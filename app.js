var https = require("https");
var username = "chalkers";

function printMessage(username,badgeCount,points){
	var message = username + " has " + badgeCount + "and this many" + points;
	console.log(message);
}

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
	console.dir(response.statusCode);
});


request.on("error", function(error){
	console.error(error.message);

})

//  var http = require('http');
// http.createServer(function (request, response){
// 	response.writeHead(200, {'Content-Type':'text/plain'});
// 	response.end('Hello World\n');
// }).listen(3000);

// console.log('hihiihfppop');