 var msg = require("./variables.js");
   var x = msg.myFunction();
   //console.log(x) // for checking 
   var changed = x.replace("kondapur","madhapur");
   console.log(changed)
   msg.myFunction(changed)
