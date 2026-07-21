import { test, expect } from '@playwright/test';


test('SnapSmart dashboard should display correctly', async ({ page }) => {

  await page.goto('/');


  // Check main application title
  await expect(
    page.getByText('SnapSmart').first()
  ).toBeVisible();


  // Check dashboard section
  await expect(
    page.locator('h1').filter({
      hasText: 'Dashboard Overview'
    })
  ).toBeVisible();


  // Check dashboard cards
  await expect(
    page.getByText('Total Bookings').first()
  ).toBeVisible();


  await expect(
    page.getByText('Completed').first()
  ).toBeVisible();


  await expect(
    page.getByText('Pending').first()
  ).toBeVisible();


  await expect(
    page.getByText('Revenue').first()
  ).toBeVisible();


  // Check recent bookings section
  await expect(
    page.getByText('Recent Bookings').first()
  ).toBeVisible();


});