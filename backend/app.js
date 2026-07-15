import express from "express";

import bookingRoutes from "./routes/bookingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

const app = express();

app.use(express.json());

app.use("/", bookingRoutes);

app.use("/", galleryRoutes);

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}