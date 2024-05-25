/**
 * Enum - a set of named constants (enumeration)
 * 
 * Days in a week
 * 
 * Types of Enums
 * 1. Numeric Enums - auto-incremented from the base of 0
 * 
 */

enum TestResult {

    Pass = 1,
    Fail,
    Skip

}

function logTestResult(testName: string, result: TestResult): void{
    console.log(`Test: ${testName}, Result Code: ${result}`);

}

logTestResult("Login Test", TestResult.Pass);
logTestResult("Registration Test", TestResult.Fail);
logTestResult("Update Profile Test", TestResult.Skip);

/**
 * 2. String Enums
 *  - string values
 *  - no auto incrementing behaviour
 * 
 */

enum BrowserType {

    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browserType: BrowserType){

    console.log(`Launching browser: ${browserType}`);
    
}

launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);

//Heterogeneous Enum

enum BrowserStatus{
    Opened = 1,
    Closed = "closed",
    Crashed = 0,
    Unknown = "unknown"

}

function reportBrowserStatus(status: BrowserStatus): string{
    return `Current browser status is ${status}`;

}
console.log(reportBrowserStatus(BrowserStatus.Opened));
console.log(reportBrowserStatus(BrowserStatus.Crashed));
console.log(reportBrowserStatus(BrowserStatus.Closed));
console.log(reportBrowserStatus(BrowserStatus.Unknown));
