import { test, expect } from "@playwright/test";


// Test 1: Notification list displays data

test("Notifications are displayed", async ({ page }) => {


    await page.route(
        "http://localhost:3000/api/notifications/customer/*",
        async route => {


            await route.fulfill({

                status: 200,

                contentType: "application/json",

                body: JSON.stringify({

                    success: true,

                    data: [

                        {
                            id: 1,

                            title: "Booking Confirmed",

                            message:
                            "Your photography session booking has been confirmed.",

                            date:
                            "2026-07-21"

                        },


                        {
                            id: 2,

                            title: "New Message",

                            message:
                            "Your photographer has sent you a message.",

                            date:
                            "2026-07-21"

                        }


                    ]

                })

            });


        }
    );



    await page.goto("http://localhost:5173");



    await expect(

        page.getByText("Notifications")

    ).toBeVisible();



    await expect(

        page.getByText("Booking Confirmed")

    ).toBeVisible();



    await expect(

        page.getByText(
            "Your photography session booking has been confirmed."
        )

    ).toBeVisible();



});




// Test 2: Empty notification state

test("Shows empty notification message when no notifications exist", async ({ page }) => {


    await page.route(
        "http://localhost:3000/api/notifications/customer/*",
        async route => {


            await route.fulfill({

                status: 200,

                contentType: "application/json",

                body: JSON.stringify({

                    success: true,

                    data: []

                })

            });


        }
    );



    await page.goto("http://localhost:5173");



    await expect(

    page.getByRole("heading", { name: "Notifications" })

).toBeVisible();



    await expect(

        page.getByText(
            "No notifications available."
        )

    ).toBeVisible();



});