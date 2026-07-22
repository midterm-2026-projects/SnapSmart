import express from "express";


import {

    createBooking,

    getBookingById,

    getCustomerBookings,

    updateBookingStatus


} from "../controllers/bookingController.js";



const router = express.Router();





router.post(

    "/bookings",

    createBooking

);




router.get(

    "/bookings/:id",

    getBookingById

);





router.get(

    "/bookings/customer/:customerId",

    getCustomerBookings

);





router.put(

    "/bookings/:id/status",

    updateBookingStatus

);





export default router;
