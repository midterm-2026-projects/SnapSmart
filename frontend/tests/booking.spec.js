import { test, expect } from "@playwright/test";

test("Complete Booking Workflow", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Verify Booking Form is displayed
  await expect(
    page.getByRole("heading", { name: "Booking Form" })
  ).toBeVisible();

  // Client Information
  await page.getByPlaceholder("Full Name").fill("Juan Dela Cruz");
  await page.getByPlaceholder("Email").fill("juan@gmail.com");
  await page.getByPlaceholder("Contact Number").fill("09123456789");

  await page.getByRole("button", {
    name: "Submit Client Information",
  }).click();

  await expect(
    page.getByText("Client Information Submitted Successfully!")
  ).toBeVisible();

  // Event Information
  await page.getByPlaceholder("Event Type").first().fill("Wedding");
  await page.locator('input[type="date"]').fill("2026-12-25");
  await page.getByPlaceholder("Venue").fill("Batangas City");

  await page.getByRole("button", {
    name: "Submit Event Booking",
  }).click();

  await expect(
    page.getByText("Event Information Submitted Successfully!")
  ).toBeVisible();

  // Confirm Booking
  await page.getByRole("button", {
    name: "Confirm Booking",
  }).click();

  await expect(
    page.getByText("Booking Confirmed Successfully!")
  ).toBeVisible();
});