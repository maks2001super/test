import {test,expect,chromium} from '@playwright/test';

test ( "some test", async()=> {
const browser = await chromium.launch();
const page = await browser.newPage();
const context = await browser.newContext();

await page.goto ('https://developer.mozilla.org/en-US/docs/MDN/Community/Contributing/Translated_content#active_locales');
await page.pause()
await page.locator ('//input[@id="top-nav-search-input"]').click();
await page.locator ('//input[@id="top-nav-search-input"]').fill('xpath');
await page.locator ('//button[@type="submit"]').click()
await page.locator('//h3/a[@href="/en-US/docs/Web/XPath"]').click();
let SecondElement= await page.locator('//a[@href="/en-US/docs/Web/XPath/Functions"]').nth(1);
await SecondElement.click();
let secondElement = await page.locator('//a[@href="/en-US/docs/Web/XPath/Functions/id"]').nth(1);
await secondElement.click();

await context.close();
await browser.close();
} 
)