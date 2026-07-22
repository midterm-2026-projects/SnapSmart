import { describe, test, expect } from "vitest";
import supabase from "../config/supabaseClient.js";


const isCI = process.env.CI;


describe.skipIf(isCI)(
    "Notification Database Integration Testing",
    () => {


        let notificationDatabaseModel;

        let TEST_USER_ID;



        test.beforeAll(async () => {


            const module =
                await import("../models/notificationDatabaseModel.js");


            notificationDatabaseModel =
                module.default;



            // Get existing user from profiles table
            const { data, error } =
                await supabase
                .from("profiles")
                .select("id")
                .limit(1)
                .single();



            if(error){
                throw error;
            }



            TEST_USER_ID = data.id;


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



                expect(
                    Array.isArray(result)
                )
                .toBe(true);



            }
        );



    }
);