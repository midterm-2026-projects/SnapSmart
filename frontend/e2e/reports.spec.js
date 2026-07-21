import { test, expect } from '@playwright/test';


test('Reports page should work', async ({ page }) => {

  await page.goto('/');


  await expect(
    page.getByText('Reports Management').first()
  ).toBeVisible();


  await expect(
    page.getByRole('button', {
      name: 'Generate Report'
    })
  ).toBeVisible();


  await page.getByRole('button', {
    name: 'Generate Report'
  }).click();


});