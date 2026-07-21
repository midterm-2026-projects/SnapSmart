import { describe, test, expect, vi } from "vitest";
import request from "supertest";
import app from "../app.js";


// Mock notification model
vi.mock("../models/notificationModel.js", () => {


    return {

        default: {


            create: vi.fn()
                .mockResolvedValue({

                    id: 1,

                    customerId:
                    "8e375b9c-dba7-41d3-af37-0291f8a4cd2b",

                    title:
                    "Booking Confirmed",

                    message:
                    "Your booking has been confirmed",

                    isRead:
                    false

                }),



            findByCustomerId: vi.fn()
                .mockResolvedValue([]),



            markAsRead: vi.fn()
                .mockResolvedValue({

                    id: 1,

                    isRead:
                    true

                })

        }

    };

});



describe(
    "Notification End-to-End Testing",
    () => {



        test(
            "should create notification successfully",
            async () => {


                const response =
                    await request(app)
                    .post("/api/notifications")
                    .send({

                        customerId:
                        "8e375b9c-dba7-41d3-af37-0291f8a4cd2b",


                        title:
                        "Booking Confirmed",


                        message:
                        "Your booking has been confirmed"

                    });



                expect(response.status)
                    .toBe(201);



                expect(response.body)
                    .toHaveProperty(
                        "success"
                    );


                expect(response.body.success)
                    .toBe(true);



                expect(response.body)
                    .toHaveProperty(
                        "data"
                    );



                expect(response.body.data)
                    .toHaveProperty(
                        "id"
                    );



                expect(response.body.data.message)
                    .toBe(
                        "Your booking has been confirmed"
                    );


            }
        );





        test(
            "should reject notification without message",
            async () => {


                const response =
                    await request(app)
                    .post("/api/notifications")
                    .send({

                        customerId:
                        "8e375b9c-dba7-41d3-af37-0291f8a4cd2b",


                        title:
                        "Booking Confirmed"

                    });



                expect(response.status)
                    .toBe(400);



            }
        );



    }
);