import {
    describe,
    test,
    expect
} from "vitest";

import request from "supertest";

import app from "../app.js";


describe("Notification API Integration Testing", () => {


    test("POST /api/notifications should create notification", async () => {


        const response =
            await request(app)
            .post("/api/notifications")
            .send({

                customerId: 1,

                recipient: "customer",

                message: "Your booking has been created"

            });



        expect(response.status)
            .toBe(201);



        expect(response.body.success)
            .toBe(true);



        expect(response.body.data)
            .toHaveProperty("id");



    });




    test("GET /api/notifications/customer/:customerId should return customer notifications", async () => {



        const response =
            await request(app)
            .get("/api/notifications/customer/1");



        expect(response.status)
            .toBe(200);



        expect(response.body.success)
            .toBe(true);



        expect(Array.isArray(response.body.data))
            .toBe(true);



    });





    test("PATCH /api/notifications/:id/read should mark notification as read", async () => {



        const createResponse =
            await request(app)
            .post("/api/notifications")
            .send({

                customerId: 1,

                recipient: "customer",

                message: "Booking confirmed"

            });



        const notificationId =
            createResponse.body.data.id;




        const response =
            await request(app)
            .patch(
                `/api/notifications/${notificationId}/read`
            );



        expect(response.status)
            .toBe(200);



        expect(response.body.success)
            .toBe(true);



        expect(response.body.data.isRead)
            .toBe(true);



    });



});