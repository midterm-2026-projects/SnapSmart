import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";

import {
  getDashboardSummary,
  getBookingTrends,
  getPerformanceMetrics,
  calculateRevenue,
  calculateExpenses,
  calculateProfit,
} from "../services/dashboardService.js";

import bookingDatabaseModel from "../models/bookingDatabaseModel.js";


vi.mock("../models/bookingDatabaseModel.js", () => ({
  default: {
    getAllBookings: vi.fn(),
  },
}));


describe("Dashboard Service", () => {


beforeEach(() => {
  vi.clearAllMocks();
});



const mockBookings = [

{
  clientName: "Juan",
  client_name: "Juan",

  status: "Completed",

  amount: 20000,
  total_amount: 20000,

  event_date: "2026-01-10",
  month: "Jan",

  rating: 5,

  expense: 5000
},


{
  clientName: "Maria",
  client_name: "Maria",

  status: "Completed",

  amount: 15000,
  total_amount: 15000,

  event_date: "2026-02-10",
  month: "Feb",

  rating: 4,

  expense: 7000
},


{
  clientName: "Pedro",
  client_name: "Pedro",

  status: "Pending",

  amount: 13500,
  total_amount: 13500,

  event_date: "2026-03-10",
  month: "Mar",

  rating: 5,

  expense: 7000
}

];





describe("getDashboardSummary()",()=>{


test("should return dashboard summary", async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



const result = await getDashboardSummary();



expect(result).toEqual({

totalBookings:3,

completed:2,

pending:1,

totalClients:3,

totalRevenue:48500

});


});





test("should throw error when no booking data exists", async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
getDashboardSummary()
)
.rejects
.toThrow(
"No booking data available"
);


});


});









describe("getBookingTrends()",()=>{


test("should return booking trends",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



const result =
await getBookingTrends();



expect(result).toEqual({

"Jan":1,
"Feb":1,
"Mar":1

});


});





test("should throw error when no booking data exists",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
getBookingTrends()
)
.rejects
.toThrow(
"No booking data available"
);


});


});









describe("getPerformanceMetrics()",()=>{


test("should return performance metrics",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



const result =
await getPerformanceMetrics();



expect(result.completionRate)
.toBeCloseTo(66.66,1);



expect(result.averageRating)
.toBeCloseTo(4.66,1);



});





test("should throw error when no booking data exists",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
getPerformanceMetrics()
)
.rejects
.toThrow(
"No booking data available"
);


});


});









describe("Financial Analytics",()=>{



test("should calculate total revenue",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



expect(
await calculateRevenue()
)
.toBe(48500);



});







test("should throw error when no booking data exists for revenue",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
calculateRevenue()
)
.rejects
.toThrow(
"No booking data available"
);


});








test("should calculate total expenses",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



expect(
await calculateExpenses()
)
.toBe(19000);



});







test("should throw error when no booking data exists for expenses",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
calculateExpenses()
)
.rejects
.toThrow(
"No booking data available"
);


});









test("should calculate net profit",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue(mockBookings);



expect(
await calculateProfit()
)
.toBe(29500);



});








test("should throw error when no booking data exists for profit",async()=>{


bookingDatabaseModel.getAllBookings
.mockResolvedValue([]);



await expect(
calculateProfit()
)
.rejects
.toThrow(
"No booking data available"
);


});



});



});