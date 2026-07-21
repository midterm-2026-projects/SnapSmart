import {
    describe,
    test,
    expect,
    vi
} from "vitest";


import request from "supertest";

import app from "../app.js";



// Mock notification service
vi.mock("../services/notificationService.js", () => ({

    createNotification: vi.fn(
        async(data)=>({

            id:1,

            user_id:data.customerId,

            title:data.title || "Notification",

            message:data.message,

            is_read:false

        })
    ),



    getNotificationsByCustomer: vi.fn(
        async()=>[

            {

                id:1,

                user_id:1,

                title:"Notification",

                message:"Booking created",

                is_read:false

            }

        ]
    ),



    markAsRead: vi.fn(
        async(id)=>({

            id,

            is_read:true

        })
    )


}));





describe(
"Notification Route-Controller Integration Testing",
()=>{



test(
"POST route should call notification controller and create notification",
async()=>{


const response =
await request(app)
.post("/api/notifications")
.send({

    customerId:1,

    recipient:"customer",

    message:"Booking created"

});



expect(response.status)
.toBe(201);



expect(response.body.success)
.toBe(true);



expect(response.body.data)
.toHaveProperty("id");



});






test(
"GET route should call notification controller and return customer notifications",
async()=>{


const response =
await request(app)
.get("/api/notifications/customer/1");



expect(response.status)
.toBe(200);



expect(response.body.success)
.toBe(true);



expect(
Array.isArray(response.body.data)
)
.toBe(true);



});






test(
"PATCH route should call notification controller and update notification",
async()=>{


const createResponse =
await request(app)
.post("/api/notifications")
.send({

    customerId:1,

    recipient:"customer",

    message:"Booking confirmed"

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



expect(response.body.data.is_read)
.toBe(true);



});



});