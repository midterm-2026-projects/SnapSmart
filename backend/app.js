import "dotenv/config";

import express from "express";
import cors from "cors";


import chatbotRoutes from "./routes/chatbotRoutes.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";



const app = express();



app.use(cors());

app.use(express.json());



// Booking
app.use("/", bookingRoutes);


// Gallery
app.use("/", galleryRoutes);


// Chatbot
app.use(
    "/api/chatbot",
    chatbotRoutes
);


// Notifications
app.use(
    "/api/notifications",
    notificationRoutes
);


// Reports
app.use(
    "/reports",
    reportRoutes
);


// Dashboard
app.use(
    "/dashboard",
    dashboardRoutes
);


// Packages
app.use(
    "/api",
    packageRoutes
);



export default app;



if(process.env.NODE_ENV !== "test"){

    app.listen(3000,()=>{

        console.log(
            "Server running on port 3000"
        );

    });

}
