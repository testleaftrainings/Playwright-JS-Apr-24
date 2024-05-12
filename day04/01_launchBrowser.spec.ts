import { test,chromium, firefox } from "@playwright/test";

test(`Test to launch Chrome browser`, async () => {

    // Create a browser instance
    const browser = await chromium.launch({ headless: false, channel:'chrome'});

    // Create the browser context 
    const browserContext = await browser.newContext();

    // Create a new page
    const page = await browserContext.newPage();

    // Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);


    await page.waitForTimeout(5000);
    
})

test(`Test to launch Edge browser`, async ()=>{

    const browser = await chromium.launch({channel: 'msedge'});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
     // Load the url
     await page.goto("http://leaftaps.com/opentaps/control/main");

     // Get the title of the page
     const title = await page.title();
     console.log(`The title of the page is ${title}`);
     
     //Get the url of the page
     const url = page.url();
     console.log(`The url of the page is ${url}`);
 
     await page.waitForTimeout(5000);

     // Close the page
     await page.close();

     // Close the browser context
     await browserContext.close();

     //Close the browser
     await browser.close();


})

test(`Test to launch Firefox browser`, async ()=>{

    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
     // Load the url
     await page.goto("http://leaftaps.com/opentaps/control/main");

     // Get the title of the page
     const title = await page.title();
     console.log(`The title of the page is ${title}`);
     
     //Get the url of the page
     const url = page.url();
     console.log(`The url of the page is ${url}`);
 
     await page.waitForTimeout(5000);

     // Close the page
     await page.close();

     // Close the browser context
     await browserContext.close();

     //Close the browser
     await browser.close();


})