// obj as a parameter in function 

function someFunc(obj) {
    console.log(obj.key1);
    console.log(obj.key2);
}
  someFunc({key1: "This", key2: "works!"});
  
//string as a parameter in function 
 exports.myString = function(text){
	console.log(text);
};