import * as bookingModel from "../models/bookingModel.js";

// Stores generated reports in memory
const generatedReports = [];

// Generate Report
export function generateReport() {
  const bookings = bookingModel.getAllBookings();

  const report = {
    id: generatedReports.length + 1,
    generatedAt: new Date().toISOString(),
    totalBookings: bookings.length,
    completedBookings: bookings.filter(
      (booking) => booking.status === "Completed"
    ).length,
    pendingBookings: bookings.filter(
      (booking) => booking.status === "Pending"
    ).length,
    cancelledBookings: bookings.filter(
      (booking) => booking.status === "Cancelled"
    ).length,
    totalRevenue: bookings.reduce(
      (total, booking) => total + (booking.amount || 0),
      0
    ),
  };

  generatedReports.push(report);

  return report;
}

// Get Generated Reports
export function getGeneratedReports() {
  return generatedReports;
}

// Download Report
export function downloadReport(id) {
  const report = generatedReports.find(
    (report) => report.id === Number(id)
  );

  if (!report) {
    throw new Error("Report not found");
  }

  return report;
}

// Clear Generated Reports (used in unit tests)
export function clearGeneratedReports() {
  generatedReports.length = 0;
}