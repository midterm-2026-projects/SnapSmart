import { describe, test, expect } from "vitest";


const isCI = process.env.CI;


describe.skipIf(isCI)(
    "Notification Database Integration Testing",
    () => {


        let notificationDatabaseModel;


        const TEST_USER_ID =
            "8e375b9c-dba7-41d3-af37-0291f8a4cd2b";



        test.beforeAll(async () => {

            const module =
                await import("../models/notificationDatabaseModel.js");

            notificationDatabaseModel =
                module.default;

        });



        test(
            "should insert notification into database",
            async () => {


                const result =
                    await notificationDatabaseModel.create({

                        userId: TEST_USER_ID,

                        title:
                            "Booking Confirmed",

                        message:
                            "Your booking has been confirmed"

                    });



                expect(result)
                    .toHaveProperty("id");


            }
        );



        test(
            "should retrieve notifications from database",
            async () => {


                const result =
                    await notificationDatabaseModel
                    .findByUserId(
                        TEST_USER_ID
                    );



                expect(Array.isArray(result))
                    .toBe(true);


            }
        );


    }
);