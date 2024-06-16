import { chromium, firefox, test } from "@playwright/test";

test(`Basic Authentication test using persistent context`, async()=>{

    const userDataDir = "./myUserDataDir";
    const context = await firefox.launchPersistentContext(userDataDir,{
        headless: false,
        colorScheme:"dark",
        permissions:['notifications', 'geolocation'],
        httpCredentials:{
            username: "admin",
            password: "testleaf"
        }
    })

    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");
    await page.getByRole('button', {name: 'Basic Auth'}).click();
    await page.waitForTimeout(3000);
})