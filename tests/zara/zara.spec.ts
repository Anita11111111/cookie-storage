import { test, expect } from '@playwright/test';

test('zara accepts cookies', async ({ page, context }) => {
  await page.goto('https://www.zara.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // const contextFromPage = await page.context().cookies()
  // const contextFromFix = await context.cookies()

  // create
  await page.context().addCookies([{
    name: "test",
    value: "98988989",
    domain: ".zara.com",
    path: "/"
  }])

  // get cookies
  const contextFromFix = await context.cookies()

  // update cookies
  const newCookies = contextFromFix.map((cookies) => {
    if (cookies.name === 'test') {
      cookies.value = 'changed'
    }
    return cookies
  })

   await page.context().clearCookies()
   await page.context().addCookies(newCookies)
   expect(contextFromFix.filter((cookies) => cookies.name === 'test')).toBeTruthy()



  // clear cookies
  // await page.context().clearCookies()
  // const clearedCookies = await context.cookies()
  // console.log(clearedCookies)


  //console.log(contextFromPage)
  console.log(1)
});