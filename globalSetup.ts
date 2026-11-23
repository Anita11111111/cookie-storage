import { chromium, expect, FullConfig } from "@playwright/test";
import { SignInPage } from "./app/ui/pages/signInPage/SignInPage";

async function globalSetup (config: FullConfig) {
    console.log("global setup starts")
    const browser = await chromium.launch()

    try {
    const page = await browser.newPage()
    const signInPage = new SignInPage(page)
    const context = await browser.newContext({
        baseURL: "https://demo.learnwebdriverio.com"
    }) 

     await signInPage.navigateToSignInPage();
     await signInPage.login("ani.anya11111111@gmail.com", "12345678");
     await expect(page.locator(`[href='/@ani/']`)).toBeVisible();

    await page.context().storageState({path: '.auth/storageState.json'})
}
    finally {
        await browser.close()
    }

    console.log("global setup ends")
}

export default globalSetup;
