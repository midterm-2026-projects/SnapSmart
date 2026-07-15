import {
    describe,
    test,
    expect
} from "vitest";


import {
    createNotification,
    getNotifications,
    markAsRead
} from "../services/notificationService.js";



describe(
"Notification Service Unit Testing",
()=>{


test(
"createNotification() should create notification",
async()=>{


    const result =
        await createNotification({

            message:"Booking confirmed",

            recipient:"customer@test.com"

        });



    expect(result)
        .toHaveProperty("id");


    expect(result.message)
        .toBe("Booking confirmed");


    expect(result.isRead)
        .toBe(false);



});




test(
"getNotifications() should return notifications",
async()=>{


    const result =
        await getNotifications();



    expect(Array.isArray(result))
        .toBe(true);



});





test(
"markAsRead() should update notification status",
async()=>{


    const notification =
        await createNotification({

            message:"New booking",

            recipient:"admin@test.com"

        });



    const result =
        await markAsRead(notification.id);



    expect(result.isRead)
        .toBe(true);



});





test(
"markAsRead() should throw error for invalid id",
async()=>{


    await expect(
        markAsRead(999)
    )
    .rejects
    .toThrow(
        "Notification not found"
    );


});


});