import { test, expect } from '@playwright/test';

test('home page has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/My Home/i); 
});

// test('navigates to get started or similar page', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Adjust the selector based on your actual link/button name
//   await page.getByRole('link', { name: /Get started/i }).click();

//   // Adjust expected heading text
//   await expect(page.getByRole('heading', { name: /Installation|Setup/i })).toBeVisible();
// });
