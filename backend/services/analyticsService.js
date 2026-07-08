import analyticsModel from "../models/analyticsModel.js";

const getDashboardSummary = () => {
    return analyticsModel.getDashboardSummary();
};

const getBookingTrends = () => {
    return analyticsModel.getBookingTrends();
};

const getPerformanceMetrics = () => {
    return analyticsModel.getPerformanceMetrics();
};

export default {
    getDashboardSummary,
    getBookingTrends,
    getPerformanceMetrics
};