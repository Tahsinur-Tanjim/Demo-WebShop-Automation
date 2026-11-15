import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage.js';

test('Register User', async ({ page }) => {

  await page.goto('/');

  const register = new RegisterPage(page);

  const email = `tahsin${Date.now()}@gmail.com`;

  await register.register(email);

await expect(
  page.getByText(email)
).toBeVisible();

  //await register.clickContinue();
  await page.click("a[href='/books']");
  await page.getByRole('link', {
  name: 'Computing and Internet',
  exact: true
}).click();
  await page.click("#add-to-cart-button-13");

  await expect(
 page.locator('.bar-notification')
).toContainText(
 'The product has been added to your shopping cart'
);

await page.click('.ico-cart');

await expect(
 page.locator('.product-name')
).toContainText(
 'Computing and Internet'
);

await expect(
 page.locator('.qty-input')
).toHaveValue('1');
  await page.waitForTimeout(5000);
});