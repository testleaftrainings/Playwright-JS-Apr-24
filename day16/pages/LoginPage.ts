import { Page, Locator } from "@playwright/test";
import { HooksPage } from "../base/Hooks";

export class LoginPage extends HooksPage {

    //Define the properties within the class
 
    private usernameInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;


    //Constructor to initialize the properties
    constructor(page: Page){
       super(); //Call the parent class constructor with the page parameter
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