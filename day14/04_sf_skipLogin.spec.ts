import { chromium, test } from "@playwright/test";

test.use({storageState: "creds/sf_login_storage.json"})
test(`Test to login Salesforce application using session storage`, async({page})=>{

    await page.goto("https://testleaf30-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
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
    

})
