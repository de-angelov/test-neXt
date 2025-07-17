import { test, expect } from '@playwright/test';

test('home page has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/My Home/i); 
});



