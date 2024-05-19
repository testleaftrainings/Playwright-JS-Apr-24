//A function which takes another function as an argument inside it is called a callback function

function processUserInput(callback){
    let name = prompt("Please enter your name");
    callback(name); //displayName(name);
    
}

function displayName(name){
    alert("Hello " + name);
}

//Calling the function
processUserInput(displayName);