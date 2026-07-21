import { describe, test, expect } from "vitest";

import notificationDatabaseModel from "../models/notificationDatabaseModel.js";


const TEST_USER_ID =
"8e375b9c-dba7-41d3-af37-0291f8a4cd2b";


describe(
"Notification Database Integration Testing",
()=>{


    test(
    "should insert notification into database",
    async()=>{


        const result =
            await notificationDatabaseModel.create({

                userId: TEST_USER_ID,

                title:"Booking Confirmed",

                message:"Your booking has been confirmed"

            });



        expect(result)
        .toHaveProperty("id");


    });



    test(
    "should retrieve notifications from database",
    async()=>{


        const result =
            await notificationDatabaseModel
            .findByUserId(
                TEST_USER_ID
            );


        expect(Array.isArray(result))
        .toBe(true);


    });



});