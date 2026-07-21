import { test, expect } from "@playwright/test";


test("Chatbot displays bot response", async ({ page }) => {


    await page.route(
        "http://localhost:3000/api/chatbot",
        async route => {

            await route.fulfill({

                status: 200,

                contentType: "application/json",

                body: JSON.stringify({

                    response:
                    "Hello! I am your SnapSmart AI assistant."

                })

            });

        }
    );


    await page.goto("http://localhost:5173");


    await page
        .getByPlaceholder("Ask SnapSmart...")
        .fill("Hello");


    await page
        .getByRole("button", { name: "Send" })
        .click();


    await expect(
        page.getByText(
            "Hello! I am your SnapSmart AI assistant."
        )
    ).toBeVisible();


});