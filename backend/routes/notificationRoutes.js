import express from "express";

import {
    createNotificationController,
    getNotificationsController,
    markAsReadController
} from "../controllers/notificationController.js";


const router = express.Router();


// Create notification
router.post(
    "/",
    createNotificationController
);


// Get notifications by customer
router.get(
    "/customer/:customerId",
    getNotificationsController
);


// Mark notification as read
router.patch(
    "/:id/read",
    markAsReadController
);


export default router;