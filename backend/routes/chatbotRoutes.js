import express from "express";
import chatbotController from "../controllers/chatbotController.js";


const router = express.Router();



router.post(
    "/message",
    chatbotController.sendMessage
);



export default router;