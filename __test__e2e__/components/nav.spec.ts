import { test, expect } from '@playwright/test';


test('Navigation links correctly redirect', async ({ page }) => {
  
  await page.goto('http://localhost:3000/');
  const button = page.getByText(/Go - Profile/i);
  
  await button.click({ button: 'left' });
  
  await expect(page).toHaveURL(/go-profile/);
});