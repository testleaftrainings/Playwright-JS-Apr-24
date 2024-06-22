import { test } from "@playwright/test";

test('Network interception using Salesforce login', async({page})=>{

    page.route("**/aura?preloadActions", async(route,request)=>{
        if(request.method()==='POST'){
            console.log(`Request URL: ${request.url()}`);
            console.log(`Request Headers: ${await request.allHeaders()}`);

            route.continue();

            const response = await page.waitForResponse(response =>
                response.url().includes('/aura?preloadActions') && response.status() === 200 
            );
            const responseBody = await response.body();
            console.log(`Response Body: ${responseBody.toString()}`);
            
            
        } else{
            route.continue();
        }

    })

    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill('divyakeerthivedula@gmail.com');
    await page.locator('#password').fill('Vedansh@28');
    await page.click("#Login");
    const appLauncher = page.locator(".slds-icon-waffle");
    await appLauncher.click();
    await page.waitForTimeout(5000);
    
})