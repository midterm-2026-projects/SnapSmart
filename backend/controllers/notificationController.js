import {
    createNotification,
    getNotificationsByCustomer,
    markAsRead
} from "../services/notificationService.js";


// Create Notification
export const createNotificationController = async (req, res) => {

    try {

        const notification =
            await createNotification(req.body);

        res.status(201).json({
            success: true,
            data: notification
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};


// Get Customer Notifications
export const getNotificationsController = async (req, res) => {

    try {

        const notifications =
            await getNotificationsByCustomer(
                req.params.customerId
            );

        res.status(200).json({
            success: true,
            data: notifications
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};


// Mark Notification as Read
export const markAsReadController = async (req, res) => {

    try {

        const notification =
            await markAsRead(req.params.id);

        res.status(200).json({
            success: true,
            data: notification
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message
        });

    }

};