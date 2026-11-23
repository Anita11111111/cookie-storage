import {test as base} from "@playwright/test"
import { SignInPage } from "../../app/ui/pages/signInPage/SignInPage"
import { HomePage } from "../../app/ui/homePage/HomePage";

type PageFixture = {
    signInPage: SignInPage
    homePage: HomePage;
}

export const test = base.extend<PageFixture>({
    signInPage: async({page}, use) => {
        await use(new SignInPage(page))
    },

    homePage: async({page}, use) => {
        await use(new HomePage(page))
    }
})