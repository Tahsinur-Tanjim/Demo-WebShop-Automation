import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  retries: 0,

  workers: 1,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'reports/html-report',
      open: 'never'
    }],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://demowebshop.tricentis.com',

    browserName: 'chromium',

    headless: false,

    viewport: {
      width: 1920,
      height: 1080
    },

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure'
  }
});