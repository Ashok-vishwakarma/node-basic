
// include index module in app module using require function
require('./index');
require('./sum');


//one way to import adnd another way to import is Destructuring
// const obj = require('./sum');          --- 1 way 
// const {calculateSum , a} = require('./sum')   //----2nd way
// const {multiply} = require('./calculate/multiply');
const {add , multiply} = require('./calculate/calculate-module')

// let a= 10

// console.log(a )
// calculateSum(10,10)
// multiply(10,10)
console.log(add(10,10));
console.log(multiply(10,10));
