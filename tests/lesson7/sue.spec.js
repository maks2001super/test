import { test, expect, chromium } from "@playwright/test";


const rwegergergerg = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto("https://suemade.com/");

  await Promise.all([
    await page.locator('(//li[@class="has_child"]/a)[1]').hover(),
    await page.getByRole("link", { name: "Акційні набори" }).click(),
  ]);
 
  await expect(page.locator('//span[@id="uid_item_74003"]')).toBeVisible();
  await page.locator('//span[@id="uid_item_74003"]').click();
  await page.getByTitle("В наявності", { exact: true }).click();
  await page.getByRole("link", { name: "S 1" }).click();
  await page
    .locator("#page_cart")
    .getByText("Оформити замовлення", { exact: true })
    .click();

  await context.close();
  await browser.close();
}

test("sue", rwegergergerg);



