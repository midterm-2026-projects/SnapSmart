import { test, expect } from '@playwright/test';


test('Analytics section should display data', async ({ page }) => {

  await page.goto('/');


  await expect(
    page.getByText('Financial Analytics').first()
  ).toBeVisible();


  await expect(
    page.getByRole('heading', {
      name: 'Revenue',
      exact: true
    }).first()
  ).toBeVisible();


  await expect(
    page.getByRole('heading', {
      name: 'Profit',
      exact: true
    }).first()
  ).toBeVisible();


});