import {
  calculateRevenue,
  calculateExpenses,
  calculateProfit,
} from "../services/dashboardService.js";

// ==============================
// Revenue Controller
// ==============================
export async function getRevenueController(req, res) {
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
}

// ==============================
// Expenses Controller
// ==============================
export async function getExpensesController(req, res) {
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
}

// ==============================
// Profit Controller
// ==============================
export async function getProfitController(req, res) {
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
}