//Methods on Array
/**
 * push() - adds one or more elemets to the end of an array 
 *        - return the new length of the array
*/ 

let userProfiles = ['Swamy', 'Dilesh', 'Vinoth', 'Ramya'];
userProfiles.push("Remya", "Hema");
console.log(userProfiles);

//pop() - remove the last element from the array 
let newArray = userProfiles.pop();
console.log(userProfiles);
console.log(newArray);

//shift() - to remove the first element from te array

let testingTypes = ["Sanity", "Smoke", "Functional"];
let newTesting = testingTypes.shift();
console.log(testingTypes);
console.log(newTesting);

//unshift() - add one or more elements to the beginning of an array
let browserNames = ["Chrome", "Firefox"];
browserNames.unshift("Safari", "Edge");
console.log(browserNames);

//slice() - return the sliced value 
let bNames = browserNames.slice(1, 4) //endValue-1
console.log(bNames);
bNames.push("Opera");
console.log(bNames);

//splice() - changes the contents of the array by removing or replacing the existing elements
let automationTools = ["Selenium", "Playwright", "WebDriverIO", "Cypress"];
//splice(startIndex, deleteCount)
automationTools.splice(2,2,"AccelQ","Puppeteer");
console.log(automationTools);

//To get the length 
// console.log(automationTools.length);

// automationTools[4] = "Cypress";
// automationTools[7] = "WebDriverIO"
// console.log(automationTools);

let number = [];
console.log(number.length);

//Heterogeneous
let mixedArray = ['Testleaf', true, ['Sanity','Regression'], 102.3]
console.log(mixedArray);

//join() - join the array to string using '-'
let browserVersions = [103.6, 90.1, 119.5];
let newBVersions = browserVersions.join('-');
console.log(newBVersions);

//concat - merges two arrays into a new array

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let result = array1.concat(array2);
console.log(result);

//sort() 
let num = [3,7,9,2,5];
console.log(num);
num.sort();
console.log(num);

//reverse
num.reverse();
console.log(num);

let user = ['Sathish', 'Michael', 'Vidya'];
user.reverse();
console.log(user);

//Spread syntax
let arr1 = ['a','b','c','d'];
let arr2 = [...arr1,'e','f','g'];
console.log(arr2);

//map(), reduce(), forEach()
