import {test,expect,chromium} from '@playwright/test';


test ('sue', async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await browser.newPage();

await page.goto('https://suemade.com/');
await page.pause();
await page.getByRole('link', { name: 'Акційні набори' }).click();
  await page.getByRole('link', { name: 'I Карбоксітерапія з азелаїновою кислотою і тонік Ромашка Карбоксітерапія з азелаїновою кислотою і тонік Ромашка 1468 ₴ 1835 ₴ c Додати в кошик .', exact: true }).click();
  await page.getByTitle('В наявності', { exact: true }).click();
  await page.getByRole('link', { name: 'S 1' }).click();
  await page.locator('#page_cart').getByText('Оформити замовлення', { exact: true }).click();

await context.close();
await browser.close();
})
