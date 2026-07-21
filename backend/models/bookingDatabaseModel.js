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
        profiles (
          first_name,
          last_name
        ),
        packages (
          package_name,
          price
        )
      `);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },
};

export default bookingDatabaseModel;