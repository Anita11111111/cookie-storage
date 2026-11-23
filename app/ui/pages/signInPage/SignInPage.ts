import { BasePage } from "../BasePage";
import { SignInPagesLocators } from "./SignInPagesLocators";

export class SignInPage extends BasePage {
    readonly locators: SignInPagesLocators = new SignInPagesLocators(this.page)

    async login(email: string, password: string) {
        await this.locators.emailInputField.fill(email)
        await this.locators.passwordInputField.fill(password)
        await this.locators.signInButton.click()
    }

    async navigateToSignInPage() {
        await this.page.goto("https://demo.learnwebdriverio.com/login")
    }

}