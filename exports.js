module.exports = "securifi embedded systems";


module.exports.simpleMsg = "secruifi embeded systems at madhapur";

// function
  module.exports.funct = function(msg){
 	console.log(msg);
  };
  
 // object
 module.exports = {
 	fName : "gowrav",
 	tName : "rahul"
 }
 
// class
 module.exports = function(name,age,desgination,gender){
 	this.name = name;
 	this.age  = age;
 	this.desgination = desgination;
 	this.gender = gender;
 }


//multiple funcitons

exports.fun1 = function(msg1){
	console.log(msg1);
};


exports.fun2 = function(msg2){
	console.log(msg2);
};

exports.fun3 = function(msg3){
	console.log(msg3);
};
  

                          // (or)


// multiple objects
var obj1= {
	fName : "gowrav",
     tName : "rahul"
}

var obj2 = {
	fName : "swaroop",
	tName : "pentakota"
}

var obj3 = {
	fName : "rudra",
	tName : "jagadeswari"
}

var obj4 ={
   fName : "pulsar",
   tName : "suzuki"
}
module.exports = {obj1,obj2,obj3,obj4};
// multiple objects
exports.obj1 = {
	fName : "gowrav",
	tName : "rahul"
}

exports.obj2 = {
	fname : "securifi",
	tName : "embedded"
}

exports.obj3 = {
	fName : "vizag",
	tName : "hyderabad"
}

exports.obj4 = {
	fName : "almond",
	tName : "router"
}

exports.fun4 = function(x,y){
    console.log(x*y);
}

// multiple variables exporting

var value1 = 200;
var value2 = 250;
var value3 = 500;
var value4 = 1000;
var value5 = 999;

module.exports = {value1, value2, value3, value4, value5};


//exporting obj,fun,var
var x = 555;

var obj1 = {
	fName : "gowrav",
	tName : "pentakota"
};

var fun1 = function(msg){
	console.log(msg);
};

module.exports =  {x, obj1, fun1};

