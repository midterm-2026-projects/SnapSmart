import * as bookingModel from "../models/bookingModel.js";


// ==============================
// Booking Service
// ==============================


// Create Booking
export function createBooking(data) {


  if (!data.clientName) {

    throw new Error("Client Name is required");

  }



  if (!data.eventDate) {

    throw new Error("Event Date is required");

  }



  // Amount validation

  if (data.amount !== undefined && data.amount !== null) {


    if (
      typeof data.amount !== "number" ||
      Number.isNaN(data.amount)
    ) {

      throw new Error("Amount must be a valid number");

    }



    if (data.amount < 0) {

      throw new Error("Amount cannot be negative");

    }

  }




  // Expense validation

  if (data.expense !== undefined && data.expense !== null) {


    if (
      typeof data.expense !== "number" ||
      Number.isNaN(data.expense)
    ) {

      throw new Error("Expense must be a valid number");

    }



    if (data.expense < 0) {

      throw new Error("Expense cannot be negative");

    }

  }



  return bookingModel.createBooking(data);

}




// Get Booking

export function getBookingById(id) {

  return bookingModel.getBookingById(id);

}




// Update Status

export function updateBookingStatus(id, status) {


  const booking = bookingModel.getBookingById(id);



  if (!booking) {

    throw new Error("Booking not found");

  }



  return bookingModel.updateBookingStatus(id, status);

}