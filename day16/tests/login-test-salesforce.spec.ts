import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


test(`Verify login functionality`, async({page})=>{

    const login = new LoginPage(page);
    await login.loadUrl("https://login.salesforce.com");
    await login.enterUsername("ranjini.r@testleaf.com");
    await login.enterPassword("Testleaf@123");
    await login.clickLogin();
    await login.getTitle();
})