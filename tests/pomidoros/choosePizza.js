import { expect } from "@playwright/test";


export class Pizza {
    constructor(page){
        this.page = page;
        this.btnPizza = page.locator('(//span[@class="block-img"])[1]');
        this.pizzaSize = page.locator('(//div[@class="col-4 select-size delete-padding"])[14]');
        this.btnBuy = page.locator('(//button[@class="button-standard cart-btn"])[7]');
    }

    async choosePizza(){
        await this.btnPizza.click();
        await this.pizzaSize.click();
        await this.btnBuy.click();
    }
}