import { test, chromium } from "@playwright/test";

//Test function
test(`Test to launch multiple contexts`, async()=>{

    const browser = await chromium.launch();
    // To create multiple browser contexts
    const browserContext1 = await browser.newContext();
    
    // To create multiple pages inside the first browser context
    const page1 = await browserContext1.newPage();
    await page1.goto("https://www.amazon.in/");
    console.log(`The title of page1 from first BC is ${await page1.title()}`);
    await page1.waitForTimeout(5000);

    const page2 = await browserContext1.newPage();
    await page2.goto("https://login.salesforce.com/");
    console.log(`The title of page2 from first BC is ${await page2.title()}`);
    await page2.waitForTimeout(5000);
    
    const browserContext2 = await browser.newContext();
    const page3 = await browserContext2.newPage();
    await page3.goto("https://www.redbus.in/");
    await page3.waitForTimeout(5000);
})