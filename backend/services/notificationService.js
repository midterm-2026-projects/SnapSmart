import notificationModel from "../models/notificationModel.js";



export const createNotification = async (data) => {


    if (

        !data.customerId &&

        !data.userId ||

        !data.message ||

        !data.recipient &&

        !data.title

    ) {

        throw new Error(

            "Customer ID, recipient, and message are required"

        );

    }


    return await notificationModel.create(data);

};




export const getNotificationsByCustomer = async (customerId) => {


    if (!customerId) {


        throw new Error(

            "Customer ID is required"

        );

    }


    return await notificationModel.findByCustomerId(customerId);

};




export const getNotificationsByUser = async (userId) => {


    if (!userId) {


        throw new Error(

            "User ID is required"

        );

    }


    return await notificationModel.findByUserId(userId);

};




export const markAsRead = async (id) => {


    if (!id) {


        throw new Error(

            "Notification ID is required"

        );

    }


    const notification =

        await notificationModel.markAsRead(id);



    if (!notification) {


        throw new Error(

            "Notification not found"

        );

    }


    return notification;

};