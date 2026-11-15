import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('Invalid Login Test', async ({ page }) => {

  await page.goto('/');

  const login = new LoginPage(page);

  await login.login(
    't6x@gmail.com',
    'pass123'
  );

  await expect(
    login.errorMessage
  ).toContainText(
    'Login was unsuccessful'
  );

  await page.waitForTimeout(5000);
});