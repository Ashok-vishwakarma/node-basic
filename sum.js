// moduls protect there variable and there function from leaking.

var a = "hello"
// you can't access this variable/function in your app.js unless you export it and import in another
function calculateSum(a, b) {
    console.log(a + b)
}

console.log("summmmm")

//to export  more then 1 function/variable then make object and pass
// { calculateSum: calculateSum, a: a };  unlesss in key value pair we can wirte key only  js will 
//automatically identify 
module.exports = { calculateSum, a};




//another way to exports in commonjs and when we console this we can see empty {}
// module.exports.a=a;
// module.exports.calculateSum=calculateSum;