
import { test } from "../fixtures/base-fixtures";
import { SignInPage } from "../../app/ui/pages/signInPage/SignInPage";
import { expect } from "@playwright/test";

// базова авторизація але з інкапсуляцією в POM
test("auth via ui - pom scenario", async ({ page }) => {
  const loginPage = new SignInPage(page);

  await loginPage.navigateToSignInPage();
  await loginPage.login("ani.anya11111111@gmail.com", "12345678");
  await expect(page.locator(`[href='/@ani/']`)).toBeVisible();
});

test("auth via ui - pom scenario - with fixture", async ({
  signInPage,
  page,
  context
}) => {
  await signInPage.navigateToSignInPage();
  await signInPage.login("ani.anya11111111@gmail.com", "12345678");
  await expect(page.locator(`[href='/@ani/']`)).toBeVisible();

  await context.storageState({path: '.auth/storageState.json'})
});

// first option to use storage state in tests is using test.use() for each test
// test.use({storageState: "storageState.json"})
test("auth via storage state", async ({
  homePage,
  page,
  context
}) => {
  await homePage.openHomePage()
  await expect(page.locator(`[href='/@ani/']`).first()).toBeVisible();

  await context.storageState({path: '.auth/storageState.json'})
});