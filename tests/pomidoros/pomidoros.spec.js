import { test, expect } from "@playwright/test";
import { Search } from "../lesson10/searchEat";

test.describe('Order in Pomidoros', () => {
  test('SearchEat', async ({ page }) => {
    const search = new Search(page);
    await search.goto('https://pomidoros-pizza.com.ua/');
    await search.searchEat();
    await expect(search.uzvar).toBeVisible();
  });
});