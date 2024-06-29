import { expect } from "@playwright/test";
import { test } from "./custom-fixtures.spec";

test(`Login to Salesforce application`, async({page}) =>{
    
    await page.waitForLoadState('load');
    const title = await page.title();
    expect(title).toContain("Home | Salesforce");
    await page.click(".slds-icon-waffle");
    await page.click("//button[text()='View All']");
})


