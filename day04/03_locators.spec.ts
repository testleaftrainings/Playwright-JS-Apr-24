import { test, chromium } from "@playwright/test";


test(`Test to locate different web elements`, async()=>{

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Enter the username
    await page.locator("#username").fill("demosalesmanager");

    await page.waitForTimeout(3000);
    //Enter the password
    await page.locator("#password").fill("crmsfa");

    await page.waitForTimeout(3000);
    // Click the Login button
    await page.locator(".decorativeSubmit").click();

    await page.waitForTimeout(2000);

   
})

test.only(`Test to locate different web elements using Playwright Locators`, async()=>{

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Enter the username
    await page.getByLabel("Username").fill("demosalesmanager");

    await page.waitForTimeout(3000);
    //Enter the password
    await page.getByLabel("Password").fill("crmsfa");

    await page.waitForTimeout(3000);
    // Click the Login button
    await page.locator("input[type='submit']").click();

    await page.waitForTimeout(2000);

   
})