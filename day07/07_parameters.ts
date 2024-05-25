/**
 * 
 * 1. Optional Parameter
 * 2. Default Parameter
 * 
 * First Name
 * Last Name
 * DOB
 * Gender
 * Address
 * Nationality
 * 
 * Phone Number
 * Mobile Number
 * Address 2
 * 
 * 
 */
function userRegistration(fName:string, lName:string, year:number, gender?:string, height?:number){
    console.log(`Sign up with ${fName}, ${lName}, ${year}, ${gender}, ${height}`);
    
}

userRegistration("Sathish", "Radhakrishnan", 2022,)

//Default Parameters
function profile(firstName:string,isActive: boolean, userProfile:string = "Available", dob?:string){
    console.log(`Profile Details ${firstName}, ${isActive}, ${userProfile}, ${dob}`);
    

}

profile("Lavanya", true, "Busy", "23 May 1995" )