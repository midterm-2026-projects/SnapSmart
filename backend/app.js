import express from "express";

import bookingRoutes from "./routes/bookingRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();

app.use(express.json());

app.use("/", bookingRoutes);
app.use("/", galleryRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/notifications", notificationRoutes);

// Dashboard Routes


export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
