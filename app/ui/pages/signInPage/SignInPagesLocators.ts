import { Locator } from "@playwright/test";
import { BasePageLocators } from "../BasePageLocators";

export class SignInPagesLocators extends BasePageLocators {
    readonly emailInputField: Locator = this.page.getByPlaceholder("Email")
    readonly passwordInputField: Locator = this.page.getByPlaceholder("Password")
    readonly signInButton: Locator = this.page.getByRole("button").filter({hasText: "Sign in"})

}