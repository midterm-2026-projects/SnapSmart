import express from "express";

import chatbotRoutes from "./routes/chatbotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

app.use(express.json());

// Booking Routes
app.use("/", bookingRoutes);

// Gallery Routes
app.use("/", galleryRoutes);

// Chatbot Routes
app.use("/api/chatbot", chatbotRoutes);

// Notification Routes
app.use("/api/notifications", notificationRoutes);

// Report Routes
app.use("/reports", reportRoutes);

// Gallery Routes
app.use("/", galleryRoutes);

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}