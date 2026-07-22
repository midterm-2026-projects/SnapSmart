import { supabase } from "../config/supabase.js";


// CREATE BOOKING
export async function createBooking(bookingData) {


    const { data, error } = await supabase

        .from("bookings")

        .insert([bookingData])

        .select()

        .single();



    if(error){

        throw error;

    }


    return data;

}






// GET BOOKING BY ID

export async function getBookingById(id){


    const { data, error } = await supabase

        .from("bookings")

        .select("*")

        .eq(
            "id",
            id
        )

        .single();



    if(error){

        throw error;

    }


    return data;

}






// GET CUSTOMER BOOKINGS

export async function getCustomerBookings(customerId){


    const { data, error } = await supabase

        .from("bookings")

        .select("*")

        .eq(

            "customer_id",

            customerId

        )

        .order(

            "created_at",

            {
                ascending:false
            }

        );



    if(error){

        throw error;

    }


    return data;

}







// UPDATE STATUS

export async function updateBookingStatus(id,status){


    const { data,error } = await supabase

        .from("bookings")

        .update({

            status

        })

        .eq(

            "id",

            id

        )

        .select()

        .single();



    if(error){

        throw error;

    }


    return data;

}
