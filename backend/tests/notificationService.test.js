import {
    describe,
    test,
    expect,
    vi,
    beforeEach
} from "vitest";


import notificationModel from "../models/notificationModel.js";


import {
    createNotification,
    getNotificationsByCustomer,
    markAsRead
} from "../services/notificationService.js";



// Mock notificationModel
vi.mock("../models/notificationModel.js", () => ({
    default: {

        create: vi.fn(),

        findByCustomerId: vi.fn(),

        markAsRead: vi.fn()

    }
}));



beforeEach(() => {

    vi.clearAllMocks();

});




// CREATE NOTIFICATION

describe("createNotification()", () => {


    test("should create notification successfully", async () => {


        notificationModel.create.mockResolvedValue({

            id: 1,

            customerId: 1,

            recipient: "customer",

            message: "Your booking has been created",

            isRead: false

        });



        const result =
            await createNotification({

                customerId: 1,

                recipient: "customer",

                message: "Your booking has been created"

            });



        expect(notificationModel.create)
            .toHaveBeenCalledOnce();



        expect(result.id)
            .toBe(1);



        expect(result.message)
            .toBe(
                "Your booking has been created"
            );



        expect(result.isRead)
            .toBe(false);



    });



    test("should throw error if required fields are missing", async () => {


        await expect(

            createNotification({

                message:"Test notification"

            })

        )
        .rejects
        .toThrow(
            "Customer ID, recipient, and message are required"
        );


    });


});





// GET CUSTOMER NOTIFICATIONS

describe("getNotificationsByCustomer()", () => {



    test("should return customer's notifications", async () => {


        notificationModel.findByCustomerId
            .mockResolvedValue([

                {

                    id:1,

                    customerId:1,

                    message:"Booking confirmed",

                    isRead:false

                }

            ]);



        const result =
            await getNotificationsByCustomer(1);



        expect(notificationModel.findByCustomerId)
            .toHaveBeenCalledWith(1);



        expect(Array.isArray(result))
            .toBe(true);



        expect(result.length)
            .toBe(1);



    });




    test("should return empty array if customer has no notifications", async () => {


        notificationModel.findByCustomerId
            .mockResolvedValue([]);



        const result =
            await getNotificationsByCustomer(999);



        expect(notificationModel.findByCustomerId)
            .toHaveBeenCalledWith(999);



        expect(Array.isArray(result))
            .toBe(true);



        expect(result.length)
            .toBe(0);



    });




    test("should throw error if customer id is missing", async () => {


        await expect(

            getNotificationsByCustomer()

        )
        .rejects
        .toThrow(
            "Customer ID is required"
        );


    });



});





// MARK AS READ

describe("markAsRead()", () => {



    test("should update notification status", async () => {



        notificationModel.markAsRead
            .mockResolvedValue({

                id:1,

                message:"Booking confirmed",

                isRead:true

            });



        const result =
            await markAsRead(1);



        expect(notificationModel.markAsRead)
            .toHaveBeenCalledWith(1);



        expect(result.isRead)
            .toBe(true);



    });




    test("should throw error if notification does not exist", async () => {



        notificationModel.markAsRead
            .mockResolvedValue(null);



        await expect(

            markAsRead(999)

        )
        .rejects
        .toThrow(
            "Notification not found"
        );



    });



});