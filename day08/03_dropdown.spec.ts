import { test, chromium } from "@playwright/test";
import { log } from "console";


test(`Test to handle dropdown using <select>`, async({page})=>{

    
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill("#username", "demosalesmanager");

    await page.fill("#password", "crmsfa")

    // Click the Login button
    await page.click(".decorativeSubmit");
   
    // Click CRM/SFA
    await page.locator("text=CRM/SFA").click();
   

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

    //Select the Source dropdown
    //Locate the dropdown by value
    await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_DIRECTMAIL"});

    //Get the values in the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of items: ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
       console.log(await dropdown.nth(index).innerText()); 
        
    }
    await page.waitForTimeout(3000);
    //Select Country dropdown
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});
    await page.waitForTimeout(3000);

    //Select Currency dropdown
    await page.selectOption("#createLeadForm_currencyUomId", {index:13})
    await page.waitForTimeout(3000);

    //Click Create Lead
    await page.locator("[name='submitButton']").click({timeout:15000});

    // To check the status
    const status = await page.locator("#viewLead_statusId_sp").innerText({timeout:40000});
    console.log(`The status is ${status}`);
    
    




    

   
})