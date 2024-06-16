import { chromium, test } from "@playwright/test";

test(`Test to login Salesforce application`, async()=>{

    const browser = await chromium.launch();

    //Start Video
    const browserContext = await browser.newContext({
        recordVideo:{
            dir: './videos/',
            size:{width: 720, height: 1280} //Optional
        }
    });

    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@123");
    await page.click("#Login");
    await page.click("div.slds-icon-waffle");
    await page.locator(".slds-input").nth(1).fill("marketing")
   await page.getByText("keting CRM Classic").click()
   await page.locator("[title='Leads']").click()
   await page.getByRole('button',{name: 'New'}).click()
   await page.locator("[name ='salutation']").click()
   await page.locator("[data-value='Mr.']").click()
   await page.locator("[name ='firstName']").fill("Sathish")
   await page.locator("[name ='lastName']").fill("Radhakrishnan")
   await page.locator("[name ='Company']").fill("Test leaf")
   await page.locator("[name ='SaveEdit']").click()
   let leadStatus = await page.locator("[slot='primaryField']").innerText()
   console.log(`The lead ${leadStatus} haven been created`);
    await browserContext.close();
    await browser.close();

})
