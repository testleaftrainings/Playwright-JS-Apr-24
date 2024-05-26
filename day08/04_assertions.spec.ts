import { test, expect } from "@playwright/test";


test(`Test to assert the input boxes`, async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    //To check the text box is enabled
    await expect(typeName).toBeEnabled();
    //Enter the value
    await typeName.fill("Testleaf");

    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();
    //await disabledTextbox.fill("Ranjini");
    await page.waitForTimeout(5000);
   
})