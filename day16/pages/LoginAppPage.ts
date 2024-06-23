import { Page, Locator } from "@playwright/test";;

export class LoginPage {

    //Define the properties within the class
    private page: Page;
    private usernameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;

    //Constructor to initialize the properties
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator("#Login");
    }


    async loadUrl(url:string):Promise<void>{
        await this.page.goto(url);
    }

    async enterUsername(username:string): Promise<string>{
        await this.usernameInput.fill(username);
        return username;
    }

    async enterPassword(password:string):Promise<string>{
        await this.passwordInput.fill(password);
        return password;
    }

    async clickLogin(): Promise<void>{
        await this.loginButton.click();
    }

    async getTitle():Promise<void>{
        const title = await this.page.title();
        console.log(`The title of the page is: ${title}`);
        
    }
}