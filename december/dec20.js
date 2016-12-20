'use strict';
// inputs: numbers from an array
// outputs: the same array, modified

var myArray = [0,1,2,3,4,5];
//prototype version of swap function using this.
Array.prototype.swap = function(a, b) {
  var temp = this[a];
  this[a] = this[b];
  this[b] = temp;
  return this;
};
console.log(myArray.swap(1,4));

//prototype version of reverse function
Array.prototype.reverse = function(myArray) {
  for ( var i = myArray.length-1; i >=0; i-= 1 ) {
    myArray.push(myArray[i]);
  }
  myArray.splice(0, myArray.length / 2);
  return myArray;
};
myArray.reverse(myArray);





var newArray = [0,1,2,3,4,5,6,7];
//regular version of swap
function swapping(a,b) {
  var temp = newArray[a];
  newArray[a] = newArray[b];
  newArray[b] = temp;
  return newArray;
}
console.log(swapping(1,7));

//regular version of reverse function
function reverse(newArray) {
  for ( var i = newArray.length-1; i >= 0; i -= 1 ) {
    newArray.push(newArray[i]);
  }
  newArray.splice(0, newArray.length / 2);
  return newArray;
}
reverse(newArray);
