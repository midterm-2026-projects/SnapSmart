import supabase from "../config/supabaseClient.js";


const bookingDatabaseModel = {

  async getAllBookings() {

    const { data, error } = await supabase
      .from("bookings")
      .select(`
        id,
        customer_id,
        package_id,
        status,
        payment_status,
        event_date,

        packages!bookings_package_id_fkey (
          package_name,
          price
        )
      `);



    if (error) {

      console.error(
        "BOOKING DATABASE ERROR:",
        error
      );

      throw new Error(error.message);

    }



    return data || [];

  }

};


export default bookingDatabaseModel;