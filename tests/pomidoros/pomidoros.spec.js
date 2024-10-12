import { test, expect } from "@playwright/test";
import { Search } from "../pomidoros/searchEat";
import { Pizza } from "./choosePizza";

test.describe('Order in Pomidoros', () => {
  test('SearchEat', async ({ page }) => {
    const search = new Search(page);
    await search.goto('https://pomidoros-pizza.com.ua/');
    await search.searchEat();
    await expect(search.uzvar).toBeVisible();
  });

  test('choose pizza', async({page})=>{
    const pizza = new Pizza(page);
    await pizza.choosePizza();

  })

});