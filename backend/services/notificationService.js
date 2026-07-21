import notificationModel from "../models/notificationModel.js";

// Create Notification
export const createNotification = async (data) => {

    if (
        !data.customerId ||
        !data.message ||
        !data.recipient
    ) {

        throw new Error(
            "Customer ID, recipient, and message are required"
        );

    }

    return notificationModel.create(data);

};


// Get Customer Notifications
export const getNotificationsByCustomer = async (customerId) => {

    if (!customerId) {

        throw new Error(
            "Customer ID is required"
        );

    }

    return notificationModel.findByCustomerId(customerId);

};


// Mark Notification as Read
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