import { Page } from "@playwright/test";
import { IPage } from "./IPage";

export class ProductPage implements IPage{

    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async openPage(): Promise<void> {
       await this.page.goto("");
    }
    getTitle(): Promise<string> {
        throw new Error("Method not implemented.");
    }


}