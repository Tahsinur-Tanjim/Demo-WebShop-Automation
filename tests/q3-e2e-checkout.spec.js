import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test('Q3 E2E Checkout Flow', async ({ page }) => {

  await page.goto('/');

  // Registration
  const register = new RegisterPage(page);
  const checkout = new CheckoutPage(page);

  const email = `tahsin${Date.now()}@gmail.com`;

  await register.register(email);

  await expect(
    page.getByText(email)
  ).toBeVisible();

  // Search Product
  await checkout.searchProduct(
    'Computing and Internet'
  );

  await expect(
  page.getByRole('link', {
    name: 'Computing and Internet',
    exact: true
  })
).toBeVisible();

  // Open Product
  await checkout.openProduct();

  // Quantity
  await checkout.setQuantity('2');
  await page.waitForTimeout(2000);

  // Add To Cart
  await checkout.addToCart();

  await expect(
  page.locator('.bar-notification')
).toContainText(
  'The product has been added to your shopping cart'
);
await page.waitForTimeout(3000);

  // Cart
  await checkout.openCart();
//   await expect(
//   page.getByText('Computing and Internet')
// ).toBeVisible();

//   // Quantity Validation
//   await expect(
//     page.locator('.qty-input')
//   ).toHaveValue('2');

  // Terms & Conditions
  await checkout.acceptTerms();

  // Checkout
  await checkout.clickCheckout();

  // Billing Address
  await checkout.fillBillingAddress();

  await page.click(
  "input[onclick='Shipping.save()']"
);

//await page.waitForTimeout(3000);

await page.click(
  "input[onclick='ShippingMethod.save()']"
);

//await page.waitForTimeout(3000);

await page.click(
  "input[onclick='PaymentMethod.save()']"
);

//await page.waitForTimeout(3000);

await page.click(
  "input[onclick='PaymentInfo.save()']"
);

//await page.waitForTimeout(3000);

await page.click(
  "input[onclick='ConfirmOrder.save()']"
);

await expect(
  page.getByText(
    'Your order has been successfully processed!'
  )
).toBeVisible();

//   await page.waitForTimeout(8000);
//   await page.pause();
});