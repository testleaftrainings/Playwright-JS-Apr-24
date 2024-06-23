import { Page, BrowserContext, Browser, chromium, Locator } from "@playwright/test";

export class LoginPage {

    //Define the properties within the class
    private page: Page;
    private usernameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;
    private browser: Browser|null = null;
    private context: BrowserContext|null = null;

    //Constructor to initialize the properties
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator("#Login");
    }



    // Define the methods inside the class
    static async setup(): Promise<{app: LoginPage, context: BrowserContext, browser: Browser}>{
        const browser = await chromium.launch({headless:false});
        const context = await browser.newContext();
        const page = await context.newPage();
        const app = new LoginPage(page); //Page is passed to the constructor
        app.browser = browser;
        app.context = context;
        return{app, context, browser};
    }

    async navigate(username:string, password:string):Promise<void>{
        await this.page.goto("https://login.salesforce.com");
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async teardown(){
        await this.page.close();
        if(this.context!= null){
            await this.context.close();
        } 
        if(this.browser) await this.browser.close();
    }

    static async runTest(): Promise<void>{
        
        const {app} = await this.setup();
        await app.navigate('ranjini.r@testleaf.com', 'Testleaf@123');
        await app.teardown();
        console.log('Test execution is completed');       

    }

}
//Create an instance of SalesforcePage and call the runTests method
LoginPage.runTest();