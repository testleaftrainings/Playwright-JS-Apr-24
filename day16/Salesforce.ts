import { Page, BrowserContext, Browser, chromium } from "@playwright/test";

export class SalesforcePage {

    //Define the properties within the class
    private usernameInput:string = '#username';
    private passwordInput:string = '#password';
    private loginButton:string = '#Login';

    // Define the methods inside the class
    async setup(): Promise<{page: Page, context: BrowserContext, browser: Browser}>{
        const browser = await chromium.launch({headless:false});
        const context = await browser.newContext();
        const page = await context.newPage();
        return{page, context, browser};
    }

    async navigate(page:Page, username:string, password:string):Promise<void>{
        await page.goto("https://login.salesforce.com");
        await page.fill(this.usernameInput,username );
        await page.fill(this.passwordInput, password);
        await page.click(this.loginButton);
    }

    async teardown(page: Page, context: BrowserContext, browser: Browser){
        await page.close();
        await context.close();
        await browser.close();
    }

    async runTest(): Promise<void>{
        //Destructuring the returned object from the setup method
        const {page, context, browser} = await this.setup();
        await this.navigate(page, 'ranjini.r@testleaf.com', 'Testleaf@123');
        await this.teardown(page, context, browser);
        console.log('Test execution is completed');       

    }

}
//Create an instance of SalesforcePage and call the runTests method
const salesforce = new SalesforcePage();
salesforce.runTest();