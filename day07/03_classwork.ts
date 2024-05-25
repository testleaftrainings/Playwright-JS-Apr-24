/**
 * Define the type supportedBrowser - Chrome & Safari (|)
 * Drfine the type browserVersion - 121 | 123 (|)
 * Define the type browserProfile - supportedBrowser & browserVersion (object literal)
 * Define a function and pass the argument(browser)
 * Launch the Chrome browser
 * Call the function
 */

type supportedBrowser = "Chrome"|"Safari";
type browserVersion = "121"|"123";
type browserProfile = {
    browserName: supportedBrowser;
    version: browserVersion
}

function callBrowser(browser: browserProfile): void{

    if(browser.browserName === "Chrome" && browser.version === "121"){
        console.log("Launch the Chrome browser");
        
    } else 
        console.log("Launch the Safari browser")
}

const chromeBrowser: browserProfile ={
        browserName: "Chrome",
        version: "121"

}

const safariBrowser: browserProfile = {
         browserName: "Safari",
         version: "123"
}
callBrowser(chromeBrowser)