/**
 * Variables --> which holds the input
 * Types
 *  1. var 2. let 3. const
 * 
 * Best practices for variable naming conventions
 * - meaningful name 
 * - a to z. A to Z, 0 t0 9, _ (underscore)
 *  firstName, firstNameWithInitial
 *  first_name
 *  don't start with numbers or underscore
 * 
 */
/**
 * Variable Declarations
 * 
 * 1. var
 * varType varName = value
 * var firstName = "Huma"
 * var allows redeclaration
 * 
 * 2. let companyName = "Testleaf";
 * 
 * 3. const browserName = "Chrome";
 * 
 * var and let - can take different values
 * const - value cannot be changed (remains same)
 * 
 * ES-6 ECMA introduce let and const
 * 1. Re-assignment
 * 2. Block level scoping
 * 3. Hoisting
 * 
 */

/*var companyName = "Testleaf";
console.log(companyName);

var companyName = "Qeagle";
console.log(companyName);

let firstName = "Sathish";
//console.log(firstName);
firstName = "Ramya";
console.log(firstName);

const browserType = "Firefox";
console.log(browserType);*/

/**
 * Scoping of variables - level of accessibilty of the variable
 * 
 * 1. Global scoping
 * 2. Function scoping
 * 3. Block Scoping
 *
 * function functionName(){
 * 
 * 
 * 
 * }
 * 
 * functionName();
 * 
 * 
 * function loginTest(username, password){
 * 
 * 
 * }
 * 
 * loginTest(demosalesmanager, crmsfa);
 * 
 */


/*let gender = 'female';      //global variable
function printGender(){
    var age = 28; // function scoped variable
    let color = 'pink'
    if(gender.startsWith('female')){
        let maritalStatus = 'married';
        console.log("She/Her");
        console.log("Inside the block using let: "+ maritalStatus);
    }else{
        console.log("He/Him");
    }
    console.log("Inside the function block: " + age);
    console.log("Inside the function block using let: " + color);
    console.log("Outside the block using let: "+ maritalStatus);

}

printGender();*/

//let --> block scoped variable
//var --> function scoped variable

/**
 * Hoisting
 * 
 * 1. Variable Hoisting
 * 2. Function Hoisting
 * 
 * var, let and const
 * 
 * Variable declarations are hoisted to the top
 * 
 */

//  console.log(companyName);
//  var companyName = 'Qeagle';

 //Internal process
// var companyName;
// console.log(companyName);
// companyName = 'Qeagle';
// console.log(companyName);

//console.log(testingType);
//let testingType = 'Regression';

//Internally

// let testingType;
// console.log(testingType);
// testingType ='Regression';

console.log(browserName);
const browserName = 'Safari';

