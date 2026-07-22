import * as bookingService from "../services/bookingService.js";




// CREATE BOOKING

export async function createBooking(req,res){


    try{


        const booking = await bookingService.createBooking(
            req.body
        );


        res.status(201).json({

            message:
            "Booking created successfully",

            data:booking

        });


    }


    catch(error){


        res.status(400).json({

            message:error.message

        });


    }

}







// GET BOOKING BY ID

export async function getBookingById(req,res){


    try{


        const booking = await bookingService.getBookingById(

            req.params.id

        );


        res.status(200).json({

            message:
            "Booking retrieved successfully",

            data:booking

        });


    }


    catch(error){


        res.status(404).json({

            message:error.message

        });


    }

}








// GET CUSTOMER BOOKINGS

export async function getCustomerBookings(req,res){


    try{


        const bookings = await bookingService.getCustomerBookings(

            req.params.customerId

        );



        res.status(200).json({

            message:
            "Customer bookings retrieved successfully",

            data:bookings

        });


    }


    catch(error){


        res.status(400).json({

            message:error.message

        });


    }

}









// UPDATE STATUS

export async function updateBookingStatus(req,res){


    try{


        const booking = await bookingService.updateBookingStatus(

            req.params.id,

            req.body.status

        );



        res.status(200).json({

            message:
            "Booking status updated successfully",

            data:booking

        });


    }


    catch(error){


        res.status(404).json({

            message:error.message

        });


    }

}
