import { test, expect } from "@playwright/test";


test(`Test to assert the input boxes`, async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("");
    //To check the text box is enabled
    await expect(typeName,"Validating the textbox").toBeEnabled();
    //Enter the value
    await typeName.fill("Testleaf");

    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();
    //await disabledTextbox.fill("Ranjini");
    await page.waitForTimeout(5000);
   
})
test("Assertion using hard assert", async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("[name='j_idt88:j_idt91']");
    await expect(appendTextbox).toBeEnabled({timeout:20000});
    await appendTextbox.fill("India");

    //Hard Assertion
    const disabled = page.getByPlaceholder("Disabled");
    await expect(disabled).toBeEnabled(); //assertion is failed
   
    const clearBox = page.locator("[name='j_idt88:j_idt95']");
    await expect(clearBox).toBeEnabled();
    await clearBox.clear();
    await clearBox.fill("Hi");
    await page.waitForTimeout(2000);

})

test.only("Assertion using soft assert", async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("[name='j_idt88:j_idt91']");
    await expect(appendTextbox).toBeEnabled();
    await appendTextbox.fill("India");

    //Soft Assertion
    const disabled = page.getByPlaceholder("Disabled");
    await expect.soft(disabled).toBeEnabled(); //assertion is failed
   
    const clearBox = page.locator("[name='j_idt88:j_idt95']");
    await expect(clearBox).toBeEnabled();
    await clearBox.clear();
    await clearBox.fill("Hi");
    await page.waitForTimeout(2000);

})

