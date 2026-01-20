import { test, expect } from '@playwright/test';

test('TC_01 - Ensure the homepage is accessible', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/jlr.com/);
});

test.describe('Website Functional Tests', () => {
  
  test('TC02_Check cookie banner enabled', async ({ page }) => {
 await page.goto('/'); 
 await expect(page.getByRole('heading', { name: 'COOKIES ON THIS WEBSITE' })).toBeVisible();
});


test('TC_03Brand tiles are visible', async ({ page }) => {
   await page.goto('/'); 
   await expect(page.getByRole('link', { name: /RANGE ROVER/i })).toBeVisible(); 
   await expect(page.getByRole('link', { name: /DEFENDER/i })).toBeVisible(); 
   await expect(page.getByRole('link', { name: /DISCOVERY/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /JAGUAR/i })).toBeVisible(); 
  });

  test('TC_04 - Verify footer link functionality', async ({ page }) => {
    await page.goto('/');
await expect(page.getByRole('link', { name: 'Accessibility' })).toBeVisible();
 await expect(page.getByRole('link', { name: 'Privacy Policy' })).toBeVisible(); 
 await expect(page.getByRole('link', { name: 'Cookie Policy' })).toBeVisible();


  });

  test('TC_05 - Verify page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('JLR Corporate Website');
  });
});
