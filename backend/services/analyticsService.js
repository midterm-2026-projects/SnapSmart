import { getAllBookings } from "../models/bookingModel.js";

const getDashboardSummary = () => {
    const bookings = getAllBookings();

    return {
        totalBookings: bookings.length,

        completed: bookings.filter(
            booking => booking.status === "Completed"
        ).length,

        pending: bookings.filter(
            booking => booking.status === "Pending"
        ).length,

        totalClients: bookings.length,

        totalRevenue: bookings.reduce(
            (total, booking) => total + (booking.amount || 0),
            0
        )
    };
};

const getBookingTrends = () => {
    const bookings = getAllBookings();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    return months.map(month => ({
        month,
        bookings: bookings.filter(
            booking => booking.month === month
        ).length
    }));
};

const getPerformanceMetrics = () => {
    const bookings = getAllBookings();

    const completed = bookings.filter(
        booking => booking.status === "Completed"
    ).length;

    const completionRate =
        bookings.length === 0
            ? 0
            : Math.round((completed / bookings.length) * 100);

    return {
        bookingCompletionRate: completionRate,
        clientSatisfaction: 92,
        revenueGrowth: 68,
        serviceQualityScore: 88
    };
};

export default {
    getDashboardSummary,
    getBookingTrends,
    getPerformanceMetrics
};