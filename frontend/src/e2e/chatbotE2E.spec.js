import { test, expect } from "@playwright/test";


test("Check homepage content", async ({ page }) => {

    await page.goto("/");


    console.log(await page.title());

    console.log(
        await page.locator("body").innerText()
    );


});