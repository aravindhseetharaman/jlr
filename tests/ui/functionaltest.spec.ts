import { test, expect } from '@playwright/test';

test('TC_01 - Ensure the homepage is accessible', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/jlr.com/);
});

test.describe('Website Functional Tests', () => {
  /*test('TC_02 - Verify main navigation menu', async ({ page }) => {
    await page.goto('https://www.jlr.com');
    const menuItems = ['Company', 'Brands']; // Add more items as needed

   for (const item of menuItems) {
      const link = page.locator(`text=${item}`);
      //await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${item.replace(/\s+/g, '').toLowerCase()}`));
      await page.goBack();
    }
      
  });

  /*test('TC_03 - Verify Leaders page access', async ({ page }) => {
    await page.goto('/');
    await page.locator('a:has-text("Leadership")').click();
    page.locator('text=About Us').hover
    await page.click('text=Careers');
    await expect(page).toHaveURL(/careers/);
    await expect(page.locator('text=Job')).toBeVisible(); // Adjust based on actual content
  });

  test('TC_04 - Verify search functionality', async ({ page }) => {
    await page.goto('/');
    await page.click('[data-testid="search-icon"]'); // Replace with actual selector
    await page.fill('[data-testid="search-input"]', 'engineering');
    await page.press('[data-testid="search-input"]', 'Enter');
    await expect(page.locator('text=engineering')).toBeVisible(); // Adjust as needed
  });*/

  test('TC_05 - Verify page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('JLR Corporate Website');
  });
});
