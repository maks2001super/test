import {test,expect,chromium} from '@playwright/test';

test ( "some test", async()=> {
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page = await context.newPage();
  
   await page.goto('https://developer.mozilla.org/en-US/docs/MDN/Community/Contributing/Translated_content#active_locales');
   await page.pause(); 

   await page.locator('//input[@id="top-nav-search-input"]').waitFor();  
   await page.locator('//input[@id="top-nav-search-input"]').click();
   await page.locator('//input[@id="top-nav-search-input"]').fill('xpath');
   await page.locator('//button[@type="submit"]').waitFor();
   await page.locator('//button[@type="submit"]').click();
   await page.waitForLoadState('networkidle');
   await page.locator('//h3/a[@href="/en-US/docs/Web/XPath"]').click();
   const secondElement = await page.locator('//a[@href="/en-US/docs/Web/XPath/Functions"]').first();
   await secondElement.click();
   const nextElement = await page.locator('//a[@href="/en-US/docs/Web/XPath/Functions/id"]').first();
   await nextElement.click();
   await page.locator('//a[@href="/en-US/docs/Web/XPath/Functions/key"]').click();
   await page.locator('//div[@class="toc-container"]//div[@class="document-toc-container"]//a[@href="#description"]').click();
   const xslKey = await page.locator('//div[@class="section-content"]//a[@href="/en-US/docs/Web/XSLT/Element/key"]').first();
   
   await page.pause();
   await xslKey.click();
   await page.pause();
   
 
   await page.close();
   await context.close();
   await browser.close();
 }
)