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



// multiple functions import
var msgs =require("./variables.js");
msgs.fun1("india");
msgs.fun2("pakistan");
msgs.fun3("ammerica");
msgs.fun4(5,6);


// import multiple objects
var msg = require("./variables.js");
console.log(msg.obj4.tName);
console.log(msg.obj2.fName);

      // (or)
// multiple objects calling
var msg = require("./variables.js");
console.log(msg.obj4.fName)


// importing multiple variables
var values = require("./variables.js");
console.log(values.value1+values.value2+values.value3+values.value4+values.value4);


// importing fun, obj, var
var msg = require("./variables.js");
console.log(msg.x);

console.log(msg.obj1.fName);

console.log(msg.fun1("imposible is posible that is i am possible"));
