import { chromium, devices, test } from "@playwright/test";


test(`Test to check device emulation`, async()=>{
    
    const myDevices = devices['Galaxy S8'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...myDevices,
        // viewport: {
        //     width: 479,
        //     height: 980
        // }
    })
    const page = await context.newPage();
    await page.goto("https://www.testleaf.com/");
    await page.waitForTimeout(5000);
})