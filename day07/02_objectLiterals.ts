/**
 *  collection of key-value pairs --> properties
 * 
 * 
 */

/*let objectName{key1:datatype1, key2:dataype2} = {
    key1: value,
    key2: value
}*/

let user:{
    first_Name: string,
    last_Name: string,
    age: number,
    email: string,
    isActive: boolean
} = {
    first_Name: "Jyoti",
    last_Name: "lekshmi",
    age: 28,
    email: "jyothi@gmail.com",
    isActive: true
}
//To access the different properties, you can use either dot notation or bracket notation

//console.log(objectName.property);
console.log(user.first_Name);
console.log(user.email);

//Bracket notation
console.log(user["last_Name"]);
console.log(user["age"]);










/**
 * 
 * let car = {
 * 
 *  name:"Honda",
 *  model: "city",
 *  isAutomatic: true
 * }
 * 
 * 
 * 
 */