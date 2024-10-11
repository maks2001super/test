import { test, expect, chromium } from "@playwright/test";

let loginData = [
  {
    email: "maks.bezhentsev",
    pass: "bobik123",
    result: "Home",
    locator: `(//span[@class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"])[1]`,
  },

  {
    email: "ks.bezhentsev",
    pass: "bobik123maks",
    result:
      "Sorry, your password was incorrect. Please double-check your password.",
    locator: `//div[@class="_ab2z"]`,
  },
  {
    email: "maks.bezhentsev",
    pass: "Olxmanapiercing1004",
    result:
      "Sorry, your password was incorrect. Please double-check your password.",
    locator: `//div[@class="_ab2z"]`,
  },
];

loginData.forEach(({ email, pass, result, locator }, index) => {
  test(`Inst login test #${index + 1} for ${email}`, async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.instagram.com/");
    await page.locator('(//input[@name="username"])').fill(email);
    await page.waitForTimeout(3000);
    await page.locator('(//input[@name="password"])').fill(pass);
    await page.locator("(//button)[2]").click();
    await page.waitForTimeout(3000);

    await expect(page.locator(locator)).toHaveText(result);
    await page.close();
    await browser.close();
  });
});
