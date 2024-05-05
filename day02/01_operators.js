//Increment Operator

let val = 10;
//Post increment
//val = val+1
console.log(val++);
//10+1 = 11
console.log(val);

//Pre increment operator

let result = 20;
//20+1 = 21
console.log(++result);

//Decrement Operator --
let number = 100;
//Post decrement
//number = number-1
console.log(number--); 
console.log(number); //99

//Pre decrement
console.log(--number);

/**
 * Equality operators --> Strict === 
 *              1. Compares the data type 2. Compares the values
 *                        Non-strict equality ==
 *              Compares only the values and not the data type
 * 
 */
console.log(1===1); //true
console.log(1===5); //false
console.log(1==='1'); //false
console.log("chrome"==="Chrome"); //false
console.log(true=="true"); //1 == "true" //false