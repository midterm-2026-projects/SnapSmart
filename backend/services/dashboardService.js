import bookingDatabaseModel from "../models/bookingDatabaseModel.js";


// ==============================
// Helper Function
// ==============================
async function getBookingsOrThrow() {

  const bookings =
    await bookingDatabaseModel.getAllBookings();


  console.log("BOOKINGS FROM DATABASE:", bookings);


  if (!bookings || bookings.length === 0) {
    throw new Error("No booking data available");
  }


  return bookings;

}



// ==============================
// Dashboard Summary
// ==============================
export async function getDashboardSummary() {

  const bookings =
    await getBookingsOrThrow();


  const totalBookings =
    bookings.length;


  const completed =
    bookings.filter(
      booking =>
        booking.status?.toLowerCase() === "completed"
    ).length;


  const pending =
    bookings.filter(
      booking =>
        booking.status?.toLowerCase() === "pending"
    ).length;



  const totalClients =
    new Set(
      bookings.map(
        booking =>
          booking.customer_id ??
          booking.client_name ??
          booking.clientName
      )
    ).size;



  const totalRevenue =
    bookings.reduce(
      (sum, booking) => {

        if (booking.packages?.price) {

          return (
            sum +
            Number(
              booking.payment_status === "paid"
              ?
              booking.packages.price
              :
              0
            )
          );

        }


        return (
          sum +
          Number(
            booking.total_amount ??
            booking.amount ??
            0
          )
        );

      },
      0
    );



  return {
    totalBookings,
    completed,
    pending,
    totalClients,
    totalRevenue
  };

}



// ==============================
// Booking Trends
// ==============================
export async function getBookingTrends() {

  const bookings =
    await getBookingsOrThrow();


  const monthlyBookings = {};


  bookings.forEach(
    booking => {

      const date =
        new Date(
          booking.event_date
        );


      const month =
        date.toLocaleString(
          "en-US",
          {
            month:"short"
          }
        );


      monthlyBookings[month] =
        (monthlyBookings[month] || 0) + 1;

    }
  );


  return monthlyBookings;

}



// ==============================
// Performance Metrics
// ==============================
export async function getPerformanceMetrics() {


  const bookings =
    await getBookingsOrThrow();



  const completed =
    bookings.filter(
      booking =>
        booking.status?.toLowerCase()
        === "completed"
    ).length;



  const completionRate =
    (completed / bookings.length) * 100;



  const ratings =
    bookings
    .filter(
      booking =>
        booking.rating !== undefined
    )
    .map(
      booking =>
        Number(booking.rating)
    );



  const averageRating =
    ratings.length > 0
    ?
    ratings.reduce(
      (a,b)=>a+b,
      0
    ) / ratings.length
    :
    "N/A";



  return {
    completionRate,
    averageRating
  };

}



// ==============================
// Financial Analytics
// ==============================


// Total Revenue
export async function calculateRevenue() {

  const bookings =
    await getBookingsOrThrow();


  console.log("REVENUE DATA:", bookings);



  return bookings.reduce(
    (total, booking)=>{


      if (booking.packages?.price) {

        return (
          total +
          Number(
            booking.payment_status === "paid"
            ?
            booking.packages.price
            :
            0
          )
        );

      }



      return (
        total +
        Number(
          booking.total_amount ??
          booking.amount ??
          0
        )
      );


    },
    0
  );

}



// Total Expenses
export async function calculateExpenses() {

  const bookings =
    await getBookingsOrThrow();


  console.log("EXPENSE DATA:", bookings);



  return bookings.reduce(
    (total, booking)=>{


      return (
        total +
        Number(
          booking.expense ??
          booking.expenses ??
          0
        )
      );


    },
    0
  );


}



// Net Profit
export async function calculateProfit() {


  const revenue =
    await calculateRevenue();


  const expenses =
    await calculateExpenses();



  console.log("REVENUE:", revenue);
  console.log("EXPENSES:", expenses);



  return revenue - expenses;

}