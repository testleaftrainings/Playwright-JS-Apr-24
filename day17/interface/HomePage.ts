import { Page } from "@playwright/test";
import { IPage } from "./IPage";

export class HomePage implements IPage {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async openPage(): Promise<void> {
        await this.page.goto("https://login.salesforce.com")
        
    }
    async getTitle(): Promise<string> {
       const title = await this.page.title();
       return title;
    }

    

}