import { test } from "@playwright/test";
import { HooksPage } from "../base/Hooks";
import { LoginPage } from "../pages/LoginPage";

test(`Verify login functionality`, async()=>{
    const hooks = new HooksPage();
    const page = await hooks.setup();
    const login = new LoginPage(page);
    await login.loadUrl("https://login.salesforce.com");
    await login.enterUsername("ranjini.r@testleaf.com");
    await login.enterPassword("Testleaf@123");
    await login.clickLogin();
    await login.getTitle();
    await hooks.teardown();

})
