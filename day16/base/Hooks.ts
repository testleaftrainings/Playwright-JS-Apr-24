import { Page, BrowserContext, Browser, chromium, Locator } from "@playwright/test";

export class HooksPage {

    //Define the properties within the class
    protected page!: Page;
    private browser!: Browser;
    private context!: BrowserContext;

    //Constructor to initialize the properties
    // constructor(page: Page){
    //     this.page = page;
    // }

    async setup(): Promise<Page>{
        this.browser = await chromium.launch({headless:false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this.page;
    }

    async teardown(){
        await this.page.close();
        if(this.context!= null){
            await this.context.close();
        } 
        if(this.browser) await this.browser.close();
    }

  
}
