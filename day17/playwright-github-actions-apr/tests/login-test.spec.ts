import { test, expect } from "@playwright/test";


test(`Login to Salesforce application using retry`, async({page}) =>{
    
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@123");
    await page.click("#Login");
    await page.waitForLoadState('load');
    const title = await page.title();
    expect(title).toContain("Home | Salesforce");
    await page.click(".slds-icon-waffle");
    await page.click("//button[text()='View All']");
})


