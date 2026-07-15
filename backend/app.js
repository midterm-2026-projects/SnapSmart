import express from "express";
import bookingRoutes from "./routes/bookingRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";

const app = express();

app.use(express.json());

app.use("/", bookingRoutes);
app.use("/api/chatbot", chatbotRoutes);

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}