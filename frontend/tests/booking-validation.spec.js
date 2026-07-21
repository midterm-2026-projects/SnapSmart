import { test, expect } from "@playwright/test";

test("Booking validation for empty fields", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByRole("button", {
    name: "Confirm Booking",
  }).click();

  await expect(
    page.getByText("Please complete all required fields.")
  ).toBeVisible();
});