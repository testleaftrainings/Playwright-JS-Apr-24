import { test } from "@playwright/test";

test.describe(`Login Functionality @smoke`, async()=>{
    
   

test.skip(`Test to generate login session state`, async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password","Testleaf@123" );
    await page.click("#Login");
    
    
    //Getting the login details(cookies)
    await page.context().storageState({path:"creds/sf_login_storage.json"});
})

test.describe.configure({mode:'serial', retries: 2})
test.fail(`Login test with an invalid user`, async({page})=>{
    test.info().annotations
   
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password","Testleaf@123" );
    await page.click("#Login");
    //Getting the login details(cookies)
    await page.click("div.slds-icon-waffle");
    await page.locator(".slds-input").nth(1).fill("marketing")
   await page.getByText("keting CRM Classic").click()
   
})

})



test.describe(`Add to Cart functionality test`, async()=>{

test(`Test to generate login session state`, async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password","Testleaf@123" );
    await page.click("#Login");
    //Getting the login details(cookies)
    await page.context().storageState({path:"creds/sf_login_storage.json"});
})

test(`Login test with an invalid user`, async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password","Testleaf@123" );
    await page.click("#Login");
    //Getting the login details(cookies)
    await page.context().storageState({path:"creds/sf_login_storage.json"});
})

})
