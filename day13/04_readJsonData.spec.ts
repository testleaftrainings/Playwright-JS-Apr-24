import { expect, test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from 'fs';
import path from "path";

loginAppData.forEach(testDataObject =>{

    test(`Test to read the static data from json for ${testDataObject.testTitle}`, async({page})=>{

        await page.goto("https://login.salesforce.com/");
        await page.fill("#username", testDataObject.username );
        await page.fill("#password", testDataObject.password );
        await page.click("#Login");
        await expect(page).toHaveTitle("Home | Salesforce", {timeout: 40*1000 });

})



})

const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/login.json'), 'utf-8'));

for (const credentials of loginData ) {
   
    test(`Test to read the dynamic data synchronously and parse it ${credentials.testTitle}`, async({page})=>{
        await page.goto("https://login.salesforce.com/");
            await page.fill("#username", credentials.username );
            await page.fill("#password", credentials.password );
            await page.click("#Login");
            await expect(page).toHaveTitle("Home | Salesforce", {timeout: 40*1000 });
    
   })



}
