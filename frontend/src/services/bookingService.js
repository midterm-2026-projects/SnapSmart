import axios from "axios";
import supabase from "./supabaseClient";


const API_URL = "http://localhost:3000";



// CREATE BOOKING (Backend API)
export const createBooking = async (data) => {


    const response = await axios.post(

        `${API_URL}/bookings`,

        data

    );


    return response.data;


};





// GET BOOKING BY ID (Backend API)
export const getBookingById = async (id) => {


    const response = await axios.get(

        `${API_URL}/bookings/${id}`

    );


    return response.data;


};







// GET CUSTOMER BOOKINGS (Supabase)
export const getCustomerBookings = async (customerId) => {


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
                ascending: false
            }

        );



    if (error) {


        throw error;


    }



    return data;


};







// UPDATE BOOKING STATUS (Backend API)
export const updateBookingStatus = async (id, status) => {


    const response = await axios.put(

        `${API_URL}/bookings/${id}/status`,

        {
            status
        }

    );


    return response.data;


};
