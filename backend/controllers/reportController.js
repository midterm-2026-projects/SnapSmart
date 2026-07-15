import {
    generateReport,
    getGeneratedReports,
    downloadReport
} from "../services/reportService.js";


// Generate Report
export const generateReportController = async (req, res) => {

    try {

        const report =
            await generateReport();

        res.status(201).json({
            success: true,
            data: report
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};


// Get Generated Reports
export const getGeneratedReportsController = async (req, res) => {

    try {

        const reports =
            await getGeneratedReports();

        res.status(200).json({
            success: true,
            data: reports
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};


// Download Report
export const downloadReportController = async (req, res) => {

    try {

        const report =
            await downloadReport(req.params.id);

        res.status(200).json({
            success: true,
            data: report
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message
        });

    }

};