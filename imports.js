var msg = require("./variables.js");
console.log(msg);

var msg = require("./variables.js");
console.log(msg.simpleMsg);

var msg = require("./variables.js");
msg.funct("hello india")


var msg  = require("./variables.js");
console.log(msg.fName+ " "+ msg.tName);


var msg = require("./variables.js");
var msg2 = new msg("gowrav",23, "node js developer", "male");
console.log(msg2.name+ " "+ msg2.age+ " "+msg2.desgination+ " "+msg2.gender);