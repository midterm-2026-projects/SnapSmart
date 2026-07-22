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

    let revenue = 0;

    try {
      revenue = await calculateRevenue();

    } catch (error) {

      if (error.message !== "No booking data available") {
        throw error;
      }

    }


    return res.status(200).json({
      success:true,
      data:{
        revenue
      }
    });


  } catch (error) {

    console.log("REVENUE ERROR MESSAGE:", error);

    return res.status(400).json({
      success:false,
      message:error.message,
      error:error
    });

  }

}



// ==============================
// Expenses Controller
// ==============================
export async function getExpensesController(req,res){

  try {

    let expenses = 0;


    try {

      expenses = await calculateExpenses();

    } catch(error){

      if(error.message !== "No booking data available"){
        throw error;
      }

    }


    return res.status(200).json({
      success:true,
      data:{
        expenses
      }
    });


  }catch(error){

    console.error("EXPENSE ERROR:",error);

    return res.status(400).json({
      success:false,
      message:error.message,
      error:error
    });

  }

}




// ==============================
// Profit Controller
// ==============================
export async function getProfitController(req,res){

  try {

    let profit = 0;


    try {

      profit = await calculateProfit();

    } catch(error){

      if(error.message !== "No booking data available"){
        throw error;
      }

    }


    return res.status(200).json({
      success:true,
      data:{
        profit
      }
    });


  }catch(error){

    console.error("PROFIT ERROR:",error);

    return res.status(400).json({
      success:false,
      message:error.message,
      error:error
    });

  }

}