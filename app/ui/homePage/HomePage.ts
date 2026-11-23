import { BasePage } from "../pages/BasePage";
import { HomePageLocators } from "./HomePageLocators";

export class HomePage extends BasePage{
    readonly locators: HomePageLocators = new HomePageLocators(this.page)

    async openHomePage() {
        await this.page.goto('/')

    }
}