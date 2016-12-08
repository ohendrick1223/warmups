

'use strict';
//TODO: create a constructor for a cup that can be used as various types of cups (hot cups, cold cups, use your imagination). It should have properties and methods, use prototypes

//WITH prototypes
function Cup(color, temp, type, liquid) {
    this.color = color;
    this.temp = temp;
    this.type = type;
    this.liquid = liquid;
}

Cup.prototype.tofillornot = function(fill) {
  if (fill === true) {
    return "Your cup is empty, Fill your cup and be merry!";
  }
  if (fill === false) {
    return "Your cup is overflowing, rejoice!";
  }
};

Cup.prototype.addLiquid = function(typeofLiquid) {
  return "You've successfully mixed " + typeofLiquid + " and " + this.liquid + "... Was this a good choice?";
};


var waddaCup = new Cup("blue", "hot", "large", "tea");
// console.log(waddaCup);
var winterCup = new Cup("snowy-white", "steaming hot", "mug", "coffee" );
// console.log(winterCup);
var thriftStoreCup = new Cup("soggy brown", "luke warm", "plain", "water" );
// console.log(thriftStoreCup);

console.log(waddaCup.tofillornot(true));
console.log(waddaCup.addLiquid("soup"));

console.log(winterCup.tofillornot(false));
console.log(winterCup.addLiquid("soup"));

console.log(thriftStoreCup.tofillornot(true));
console.log(thriftStoreCup.addLiquid("tomato juice"));


//========================WITHOUT prototypes=============================
// function cup(color, temp, type, liquid, liquidAmount) {
//     this.color = color;
//     this.temp = temp;
//     this.type = type;
//     this.liquid = liquid;
//     this.liquidAmount = liquidAmount
//     this.addLiquid = function(typeofLiquid) {
//         return "You've successfully mixed " + typeofLiquid + " and " + liquid + ". Was this a good choice?";
//     };
//     this.tofillornot = function(fill) {
//         if (fill === true) {
//           liquidAmount = true;
//             return "Your cup is empty, Fill your cup and be merry!";
//         }
//         if (fill === false) {
//           liquidAmount = false;
//             return "Your cup is overflowing, rejoice!";
//         }
//
//     };
// }


// var waddaCup = new cup("blue", "hot", "large", "tea");
// console.log(waddaCup);
// cup.prototype.
//
// var winterCup = new cup("snowy-white", "steaming hot", "mug", "coffee" );
// console.log(winterCup);
// var thriftStoreCup = new cup("soggy brown", "luke warm", "plain", "water" );
// console.log(thriftStoreCup);
//
// console.log(waddaCup.addLiquid("water"));
// console.log((waddaCup.tofillornot(true)));
//
//
//
// console.log(winterCup.addLiquid("water"));
// console.log(winterCup.tofillornot(false));
//
// console.log(thriftStoreCup.addLiquid("soup"));
// console.log(thriftStoreCup.tofillornot(false));
