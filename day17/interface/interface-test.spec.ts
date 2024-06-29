import { test } from "@playwright/test";
import { HomePage } from "./HomePage";

test('Learning interface', async({page})=>{
    const home = new HomePage(page);
    await home.openPage();
    await home.getTitle()
})