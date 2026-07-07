import {
    createBooking,
    getBookingById,
    updateBookingStatus
} from "../services/bookingService.js";

export function create(req, res) {

    try {

        const booking = createBooking(req.body);

        res.status(201).json(booking);

    } catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

}

export function getById(req, res) {

    const booking = getBookingById(req.params.id);

    if (!booking) {

        return res.status(404).json({
            message: "Booking not found"
        });

    }

    res.json(booking);

}

export function updateStatus(req, res) {

    try {

        const booking = updateBookingStatus(
            req.params.id,
            req.body.status
        );

        res.json(booking);

    } catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

}