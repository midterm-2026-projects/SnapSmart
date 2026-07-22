import { test, expect } from "@playwright/test";

test("Submit Client Information", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByPlaceholder("Full Name").fill("John Doe");
  await page.getByPlaceholder("Email").fill("john@gmail.com");
  await page.getByPlaceholder("Contact Number").fill("09123456789");

  await page.getByRole("button", {
    name: "Submit Client Information",
  }).click();

  await expect(
    page.getByText("Client Information Submitted Successfully!")
  ).toBeVisible();
});