//Create a promise

function fetchUserData(userId){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               if(userId===44) {
                    resolve({id:44, name:"Jothish"});   //fulfill the promise
               } else {
                    reject(new Error("User Not Found")); //promise is failed
               }

            }, 3000)

        })


}
//Consuming the Promise
fetchUserData(44)
    .then(userDetails=>{
        console.log('User Found:', userDetails.name );
    })
    .catch(errorMsg =>{
        console.error(errorMsg);       //The error message
    })
