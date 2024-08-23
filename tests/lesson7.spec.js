import {test,expect,chromium} from '@playwright/test';


test ('has title', async () => {
const browser = await chromium.launch();
const page = await browser.newPage();
const context = await browser.newContext();
  
  await page.goto('https://auto.ria.com/uk/');
  await page.pause();
  await page.getByRole('link', { name: 'Розширений пошук' }).click();
  await page.locator('#autocomplete-brand-0 label').click();
  await page.getByText('Ford').first().click();
  await page.locator('#autocomplete-model-0 label').click();
  await page.getByText('Focus', { exact: true }).click();
  await page.locator('#at_price-to').click();
  await page.locator('#at_price-to').fill('4750');
  await page.getByText('Київська').click();
  await page.locator('#autocomplete-city label').click();
  await page.getByText('Бровари').click();
  await page.getByText('Розумію і дозволяю').click();
  await page.getByRole('button', { name: 'Пошук' }).click();
  await page.getByRole('link', { name: 'Хетчбек Ford Focus 2007' }).nth(1).click();
  await page.getByRole('link', { name: '(067) xxx xx xx' }).click();
  await page.getByRole('link', { name: 'Перетелефонуйте мені' }).click();
  await page.getByPlaceholder('Ваше ім\'я').click();
  await page.getByPlaceholder('Ваше ім\'я').fill('Ілля');
  await page.getByPlaceholder('+38 (0__) ___ __ __').click();
  await page.getByPlaceholder('+38 (0__) ___ __ __').fill('+38 (098) 876-35-18');
  await page.getByRole('button', { name: 'Перетелефонуйте мені' }).click();
  await page.locator('#show-phone').getByText('×').click();

  await context.close();
  await browser.close();
}

)

