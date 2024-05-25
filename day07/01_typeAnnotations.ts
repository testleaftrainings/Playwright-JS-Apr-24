/**
 * Type Annotations
 * - explicitly mentioning the type for a variable, function
 * 
 * 
 */

// let userProfile: number|string = 28;
// userProfile = "Sathish";
// console.log(userProfile);

/**
 * Type Aliases
 * - way to create new names for the types
 * type  aliasName = value
 * 
 */
type stringOrNumber = string|number;
let userProfile:stringOrNumber =  "Remya";

type supportedBrowsers = "Chrome"|"Firefox";

function invokeBrowser(browserName:supportedBrowsers):void{

        if(browserName === "Chrome"){
            console.log("Launch Chrome Browser");
            
        } else{
            console.log("Launch Firefox browser");
            
        }
}
invokeBrowser("Chrome")

//Intersection Types
type Admin = {
    adminName: string,
    privileges: string[]

};

type Employee = {
    name: string,
    empId: number,
    date: string
}

type QA = Admin & Employee

const user1: QA ={
    adminName: "Testleaf",
    name: "SanthanaPriya",
    privileges: ["server"],
    empId: 1001,
    date: "25 May 2023"
}
console.log(user1.privileges);

