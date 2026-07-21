import { test, expect } from "@playwright/test";

test("Complete Gallery Workflow", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Scroll to Gallery section
  await page
    .getByRole("heading", { name: "Gallery" })
    .scrollIntoViewIfNeeded();

  // Create Gallery
  await page.getByPlaceholder("Client Name").fill("Juan Dela Cruz");
  await page.getByPlaceholder("Image Name").fill("Wedding Album");
  await page.getByPlaceholder("Event Type").last().fill("Wedding");

  await page
    .locator('input[placeholder="File Size"]')
    .first()
    .fill("100");

  // Submit Gallery
  await page
    .getByRole("button", { name: "Create Gallery" })
    .click();

  // Hintayin ang response ng UI
  await page.waitForTimeout(1000);

  const message = page.locator("p").last();

  await expect(message).toBeVisible();

  const text = await message.textContent();

  console.log("Gallery Message:", text);

  expect(text).toContain("Gallery uploaded successfully");

  // Upload Photo
  await page.getByPlaceholder("Gallery ID").fill("1");
  await page.getByPlaceholder("Photo Name").fill("Bride Photo");

  await page
    .locator('input[placeholder="File Size"]')
    .last()
    .fill("50");

  await page
    .getByRole("button", { name: "Upload Photo" })
    .click();

  await expect(
    page.getByText("Photo uploaded successfully")
  ).toBeVisible();
});