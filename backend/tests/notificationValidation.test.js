import { describe, test, expect } from "vitest";

import {
    createNotification
} from "../services/notificationService.js";



describe(
"Notification Validation Testing",
()=>{


    test(
    "should accept valid notification data",
    async()=>{


        const data = {

            userId:
            "8e375b9c-dba7-41d3-af37-0291f8a4cd2b",

            title:
            "Booking Confirmed",

            message:
            "Your booking has been confirmed"

        };


        await expect(
            createNotification(data)
        )
        .resolves
        .toBeDefined();


    });



    test(
    "should reject notification without user id",
    async()=>{


        const data = {

            title:
            "Booking Confirmed",

            message:
            "Your booking has been confirmed"

        };


        await expect(
            createNotification(data)
        )
        .rejects
        .toThrow();


    });



    test(
    "should reject notification without message",
    async()=>{


        const data = {

            userId:
            "8e375b9c-dba7-41d3-af37-0291f8a4cd2b",

            title:
            "Booking Confirmed"

        };


        await expect(
            createNotification(data)
        )
        .rejects
        .toThrow();


    });



    test(
    "should reject empty notification data",
    async()=>{


        await expect(
            createNotification({})
        )
        .rejects
        .toThrow();


    });



});