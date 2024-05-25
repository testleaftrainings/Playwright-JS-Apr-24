/**
 * 1. Angle brackets
 * 2. 'as'
 * 
 * 
 */

let response: any = "Record created successfully";
let myResponse: number = (<string>response).length;
console.log(myResponse);
console.log(typeof myResponse);

let statusCode: any = "Success";
let statusLength: string = statusCode as string;
console.log(statusLength);


