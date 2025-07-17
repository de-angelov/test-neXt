import { test, expect } from '@playwright/test';

test('go profile page has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000/go-profile');

  await expect(page).toHaveTitle(/Go-Profile/i); 
});

