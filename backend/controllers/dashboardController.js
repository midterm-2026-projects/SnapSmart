import {
  calculateRevenue,
  calculateExpenses,
  calculateProfit,
} from "../services/dashboardService.js";

// Get Total Revenue
export const getRevenueController = async (req, res) => {
  try {
    const revenue = await calculateRevenue();

    res.status(200).json({
      success: true,
      data: {
        revenue,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Total Expenses
export const getExpensesController = async (req, res) => {
  try {
    const expenses = await calculateExpenses();

    res.status(200).json({
      success: true,
      data: {
        expenses,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Net Profit
export const getProfitController = async (req, res) => {
  try {
    const profit = await calculateProfit();

    res.status(200).json({
      success: true,
      data: {
        profit,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};