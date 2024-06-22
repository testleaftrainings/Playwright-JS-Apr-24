import { chromium, test } from "@playwright/test";

test (`Verify Geolocation`, async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext({
        geolocation:{
            latitude: 32.715736,
            longitude: -117.161087
        },
        permissions:['geolocation']
    })
    const page = await context.newPage();
    await page.goto("https://www.openstreetmap.org/");
    await page.waitForTimeout(5000);
})


test(`Verify geolocation using google maps`, async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        geolocation:{
            latitude: 32.715736,
            longitude: -117.161087
        },
        permissions:['geolocation']
    })
    const page = await context.newPage();
    await page.goto("https://www.google.com/maps");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#sVuEFc").click();
    await page.waitForTimeout(10000);

})

test.use({
    geolocation:{
        latitude: 48.86,
        longitude: 2.35 
    },
    permissions:['geolocation']
})

test.only(`Loading San diego`, async({page})=>{

    await page.goto("https://www.google.com/maps");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#sVuEFc").click();
    await page.waitForTimeout(10000);

})