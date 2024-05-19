const numbers = [1,2,3,4,5]
/**
 * 
 * map
 * array.map(function(currentValue, index, array)){
 * //return element for the new array
 * }
 * 
 * 
 */

//Square of the numbers in the array
const squares = numbers.map(num => num * num);
/**
 * map(function (num){
 *  return num*num 
 * })
 * 
 */

//represents the current element being processed in the numbers array
console.log(squares);

//sort
const array = [6, 87, 11, 4, 3, 45];
const sortedArray = array.sort((a,b)=> a - b);
console.log(sortedArray);

const descendingArray = array.sort((a,b)=> b - a);
console.log(descendingArray);
/***
 * 
 * a = 6, b = 87 
 * a - b = -81 (A negative value if a should come before b in the sorted order)
 * [6, 87, 11, 4, 3, 45]
 * a = 87, b = 11
 * a - b = 76 (A positive value if a should come after b in the sorted order)
 * [6, 11, 87 , 4, 3, 45]
 * a = 11, b = 4
 * a - b = 7 
 * [6, 4, 11, 87, 3, 45]
 * 
 * a = 4, b= 3
 * a - b = 1 
 * 
 * a - b = 0 , they are equal in the sorting order
 */