import { expect } from "@playwright/test";

export class Search {
  constructor(page) {
    this.page = page;
    this.btnMenu = page.locator('//span[@class="icon-menu burger_btn"]');
    this.desserts = page.locator('(//a[@href="https://pomidoros-pizza.com.ua/desert/"])[1]');
    this.napoi = page.locator('(//span[@class="block-img"])[7]'); 
    this.uzvar = page.locator('(//div[@class="col sushi__price delete-padding"])[2]');
    this.button = page.locator('//button[@class="btn btn-primary"]');
  }

  async goto(url) {
    await this.page.goto(url); 
  }

  async searchEat() {
    await this.button.click();
    await this.btnMenu.click();
    await this.desserts.click();
    await this.napoi.click();
    await expect(this.uzvar).toBeVisible(); 
    await this.uzvar.click();
  }
}

