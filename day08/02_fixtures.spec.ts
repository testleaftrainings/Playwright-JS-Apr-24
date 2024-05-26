import { test, chromium } from "@playwright/test";


test(`Test to create a lead using page fixture`, async({page})=>{

    //Setup
    // const browser = await chromium.launch();
    // const browserContext = await browser.newContext();
    // const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Enter the username
    await page.fill("#username", "demosalesmanager");
    //await page.locator("#username").fill("demosalesmanager");

    //Enter the password
    await page.waitForSelector("#password");
    await page.fill("#password", "crmsfa")
    //await page.locator("#password").fill("crmsfa");

    // Click the Login button
    await page.click(".decorativeSubmit");
    //await page.locator(".decorativeSubmit").click();

    // Click CRM/SFA
    await page.locator("text=CRM/SFA").click();
    //Using in-built Playwright locators
    //await page.getByText("CRM/SFA").click();

    // Click Leads
    await page.getByRole('link', { name: 'Leads' }).click();

    // Click Create Lead
    await page.getByRole('link', {name: 'Create Lead'}).click();

    // Enter company name
    await page.locator("input[class='inputBox']").nth(0).fill("Testleaf");

    // Enter firstname
    await page.locator("input[name='firstName']").last().fill("Divya");

    //Enter lastname
    await page.locator("#createLeadForm_lastName").fill("Bharathi");

    //Click Create Lead
    await page.locator("[name='submitButton']").click({timeout:15000});

    // To check the status
    const status = await page.locator("#viewLead_statusId_sp").innerText({timeout:40000});
    console.log(`The status is ${status}`);
    




    

   
})