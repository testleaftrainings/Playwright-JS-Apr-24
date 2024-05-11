//String - sequence of characters
//String declaration

let username = `Ramya`; //String literal  
console.log(typeof username); //string
let user = new String("Divya"); //String object
console.log(typeof user); //object

let testType = 'It\'s a smoke test';
let name = "Hello, This is a \"\" double quote";

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 110;
let result = testcaseId+ "-"+ testcaseName +": passed in last execution";
console.log(result);

//concat
let first_string = "Hi Team";
let last_string = "Welcome to Playwright";
console.log(first_string.concat("$", last_string));

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
console.log(courseName.charAt(courseName.length-1));

//indexOf - index of the character
console.log(`The index of l is ${courseName.indexOf('l')}`);
console.log(`The index of e is ${courseName.indexOf('e')}`);
console.log(`The index of a is ${courseName.indexOf('a')}`);

let toolName = "Selenium";
console.log(`The index of e is ${courseName.indexOf('e')}`);
//noMatch = -1

//includes - true/false
console.log(`${courseName.includes('ele')}`);

//lowercase & uppercase
courseName = "DATA STRUCTURE ALGORITHM"
console.log(`${courseName.toLowerCase()}`);
coursName = "aws";
console.log(`${courseName.toUpperCase()}`);

//slice - extract a part of a string and returns a new string
let welcomeMessage = "Welcome to Testleaf, Happy Learning!!"        
let outputMessage = welcomeMessage.slice(7,23);
console.log(`New String is ${outputMessage}`);

//substring

outputMessage = welcomeMessage.substring(4, 15);
console.log(outputMessage);

//split - split a string into array of substrings
//input: Testleaf output: faeltset
let compName = "Testleaf"; //Output:T, e, s, t, l, e, a, f
function reverseString(){
    let chars = compName.split("");
    console.log(chars);
    let reversed = " ";
    for (let index = chars.length-1; index >= 0; index--) {
         
        reversed = reversed+chars[index];
        
    }
    return reversed;
}
console.log(reverseString());


let originalString = "Welcome to Testleaf";
//.split() --> ['W','e','l']
let reversedString = originalString.split("").reverse().join('');
console.log(reversedString);

