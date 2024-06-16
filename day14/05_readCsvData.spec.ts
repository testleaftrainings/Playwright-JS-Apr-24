import { expect, test } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs';
import path from "path";

   
const records = parse(fs.readFileSync(path.join(__dirname,'../../data/loginSF.csv')),{
    columns: true,
    skip_empty_lines: true
})
for(const record of records){
    test(`Test to read the data using ${record.testTitle}`, async({page})=>{
            await page.goto("https://login.salesforce.com/");
            await page.fill("#username", record.username);
            await page.fill("#password", record.password );
            await page.click("#Login");
            await expect(page).toHaveTitle("Home | Salesforce", {timeout: 40*1000 });
    
   })
}

   /**
    * Install csv parser
    * npm install csv-parse
    */



