"use strict";
$( document ).ready(function() {

var computerNumber = getRandom();

var min = 0;
var max = 100;
console.log("im working");
function getRandom(min, max) {
    var randomNumber = (Math.floor((Math.random()) * 100) + 1);
    return randomNumber;
}
console.log(getRandom(min, max));

($("#submit")).click(function() {

  var input = $("#userInput").val();
console.log(input);
  // switch (true) {
  //   case (input === computerNumber):
  //   Materialize.toast("You found a match!", 4000);
  //   break;
  //   case (input > computerNumber):
  //   Materialize.toast("Your number is too high, try again", 4000);
  //   break;
  //   case (input < computerNumber):
  //   Materialize.toast("Your number is too low, try again", 4000);
  //   break;
  //   default:
  //
  // }

  if(input === computerNumber) {
    Materialize.toast("You found a match!", 4000);
  }
  else if (input > computerNumber) {
    Materialize.toast("Your number is too high, try again", 4000);
  }
  else if (input < computerNumber) {
    Materialize.toast("Your number is too low, try again", 4000);
  }
  else {
    Materialize.toast("You need to put something better in!", 4000);
  }




  $("#userInput").val('');

});

});
