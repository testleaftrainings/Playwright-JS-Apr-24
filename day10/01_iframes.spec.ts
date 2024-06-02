import { test } from "@playwright/test";

test(`Test to interact with the frames`, async({page})=>{

    await page.goto("https://www.oneindia.com/");

    //To get the frames
    const frames = page.frames();
    console.log(frames);
    //To get the count of frames
    const frameCount = page.frames().length;
    console.log(`The total no. of frames is ${frameCount}`);

    for (let frame of frames) {
        const title = await frame.title();
          console.log(`The title of the frame is ${title}`);
    }

    page.waitForTimeout(3000);
    
    
})

test(`Test to interact with the frames using leafground app`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");

    //To get the frames
    const frames = page.frames();
    console.log(frames);
    //To get the count of frames
    const frameCount = page.frames().length;
    console.log(`The total no. of frames is ${frameCount}`);

    await page.waitForTimeout(3000);
    
    for (let frame of frames) {
      const title = await frame.title();
        console.log(`The title of the frame is ${title}`);
        
    }
    
})

test(`Test to handle frames using frame object`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");

    //Interact with iframe using url
    const frame = page.frame({url:"https://leafground.com/default.xhtml"});

    //Click the button
    frame?.click("button#Click");
    
    /**
     * Conditional check
     * if(frame !== null){
     *  select
     *  click the button
     * 
     * }
     * 
     * Non- null assertion operator
     * frame!.click("")
     */
    await page.waitForTimeout(2000);
    const frames = page.frames(); 
    //Using index
    await frames[4].click("button#Click");

    await page.waitForTimeout(2000);

})

test.only(`Handling frames using frameLocator object`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");

    //Interact with the frame using frameLocator
    const frame = page.frameLocator("iframe").first();
    await frame.locator("#Click").click();

    //Chaining
    //await page.frameLocator("iframe").first().locator("#Click").click();

    //Interact with nested frames
    const card = page.locator(".card").filter({hasText:" Click Me (Inside Nested frame)"});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click();

    await page.waitForTimeout(3000);

    // await page.locator(".card").filter({hasText:" Click Me (Inside Nested frame)"})
    // .frameLocator("iframe").first().frameLocator("iframe").locator("#Click").click();

})