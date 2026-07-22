import { test, expect } from "@playwright/test";

test("Submit Event Information", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByPlaceholder("Event Type").first().fill("Birthday");
  await page.locator('input[type="date"]').fill("2026-10-15");
  await page.getByPlaceholder("Venue").fill("Batangas");

  await page.getByRole("button", {
    name: "Submit Event Booking",
  }).click();

  await expect(
    page.getByText("Event Information Submitted Successfully!")
  ).toBeVisible();
});