import { expect } from "@playwright/test";
import { test } from "./retry-logic.spec.ts";

test(`Login to Salesforce application using retry`, async({page}) =>{
    
    await page.goto("https://login.salesforce.com");
    await page.delayedFill("#username", "ranjini.r@testleaf.com");
    await page.delayedFill("#password", "Testleaf@123");
    await page.clickAndDelay("Login");
    await page.waitForLoadState('load');
    const title = await page.title();
    expect(title).toContain("Home | Salesforce");
    await page.click(".slds-icon-waffle");
    await page.click("//button[text()='View All']");
})


