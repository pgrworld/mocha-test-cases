var text = "securifi embedded systems at kondapur";
exports.myFunction = function(test){
	 console.log(test)
	return text;
};
             

                        (or)

var str = "secruifi embedded systems at kondhapur";
module.exports = {str};

var msg2 = require("./imports.js");
console.log(str)
console.log(msg2.func())
