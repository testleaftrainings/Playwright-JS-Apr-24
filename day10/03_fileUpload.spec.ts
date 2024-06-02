import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to upload file`, async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");

    //Directly uploads the file to that particular location
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator("input[type='file']").setInputFiles([path.join(__dirname,"PW_W4_Frame_Leafground.pdf")])
    //[path/file1.img, path/file2.mp4]
    //C:\Playwright Workspace\playwright-js-april/tests/day10/filename

    await expect(page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator(".ui-fileupload-filename")).toContainText("PW_W4_Frame_Leafground.pdf");

    await page.waitForTimeout(3000);

})

test.only(`Test to upload file using fileChooser`, async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    //Create a promise
    const filePromise = page.waitForEvent('filechooser');
    //User action
    await page.click("#drag-drop-upload");
    //Resolving the promise
    const fileChooser = await filePromise;

    await fileChooser.setFiles([path.join(__dirname,"PW_W4_Frame_Leafground.pdf")]);

    //Assertion
    expect(page.locator("#drag-drop-upload")).toHaveClass("dz-success-mark dz-clickable dz-started");



    
})
