import express from "express";

import {
    generateReportController,
    getGeneratedReportsController,
    downloadReportController
} from "../controllers/reportController.js";


const router = express.Router();


// Generate Report
router.post(
    "/generate",
    generateReportController
);


// Get Generated Reports
router.get(
    "/",
    getGeneratedReportsController
);


// Download Report
router.get(
    "/:id",
    downloadReportController
);


export default router;