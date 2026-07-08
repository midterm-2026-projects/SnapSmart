const getDashboardSummary = () => {
    return {
        totalBookings: 24,
        completed: 18,
        pending: 4,
        totalClients: 35,
        totalRevenue: 48500
    };
};

const getBookingTrends = () => {
    return [
        { month: "Jan", bookings: 12 },
        { month: "Feb", bookings: 18 },
        { month: "Mar", bookings: 15 },
        { month: "Apr", bookings: 22 },
        { month: "May", bookings: 20 },
        { month: "Jun", bookings: 28 }
    ];
};

const getPerformanceMetrics = () => {
    return {
        bookingCompletionRate: 85,
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