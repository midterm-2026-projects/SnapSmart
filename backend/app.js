import express from "express";

import bookingRoutes from "./routes/bookingRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

app.use(express.json());

// Booking Routes
app.use("/", bookingRoutes);

// Dashboard Routes
app.use("/", dashboardRoutes);

export default app;

// Start server only if not running tests
if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}