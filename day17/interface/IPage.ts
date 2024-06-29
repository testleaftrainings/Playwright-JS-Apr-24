import { log } from "console";

export  interface IPage {
    openPage() : Promise<void>;
    getTitle() : Promise<string>;
}