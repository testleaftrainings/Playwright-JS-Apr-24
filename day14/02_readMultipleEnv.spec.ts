import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

const environment = process.env.NODE_ENV || 'testing'
const envPath = path.resolve(__dirname, `../../data/${environment}.env`);
dotenv.config({path:envPath})

test(`Login Test using different .env files`, async({page})=>{

    const username = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", username);
    await page.fill("#password", password );
    await page.click("#Login");
    await expect(page).toHaveTitle("Home | Salesforce", {timeout: 40*1000 });


})

/**
 * To run the test
 * $env:NODE_ENV="testing"; npx playwright test 02_readMultipleEnv.spec.ts
 * 
 * To install
 * npm install dotenv
 */