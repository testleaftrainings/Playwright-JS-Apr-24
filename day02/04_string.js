//String declaration
let username = `Ramya`; //String literal
console.log(typeof username);
let user = new String("Divya"); //String object
console.log(typeof user);

let testType = 'It\'s a smoke test';
let name = "Hello, This is a \"\" double quote";

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 110;
let result = testcaseId+ "-"+ testcaseName +": passed in last execution";
console.log(result);

//Template literal - introduced in ES6 `${}`
let testcaseCount = 900;
let output = `There are ${testcaseCount} tests automated in our project`;
console.log(output);

//How to get the count of character in the string?
let courseName = "Playwright"; //Length starts from 1
let count = courseName.length;
//console.log(`The count of the string is ${courseName.length}`);
console.log(`The count of the string is ${count}`);

//Find the first character of the given string
console.log(`The first character is ${courseName.charAt(0)}`);
console.log(`The character present in 5th index is ${courseName.charAt(5)}`);
//index starts from 0
//charAt - returns the character present in that particular index
courseName = "Selenium";
    //Length  1,2
    //Index   0, 1,
console.log(courseName.length);
console.log(courseName.charAt(courseName.length-2));

//indexOf - index of the character
console.log(`The index of l is ${courseName.indexOf('l')}`);
console.log(`The index of e is ${courseName.indexOf('e')}`);
console.log(`The index of a is ${courseName.indexOf('a')}`);
//noMatch = -1

//includes - true/false
console.log(`${courseName.includes('ele')}`);

//lowercase & uppercase
courseName = "DATA STRUCTURE ALGORITHM"
console.log(`${courseName.toLowerCase()}`);
/**
 * even index char
 * for(i=0; i<=string.length; i++){
 * if(i%2==0){
 *  string.toLowercase();
 * }
 * }
 * 
 * 
 */



