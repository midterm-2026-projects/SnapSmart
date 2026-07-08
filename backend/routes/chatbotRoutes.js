import express from "express";
import chatbotService from "../services/chatbotService.js";

const router = express.Router();


router.post("/message", async(req,res)=>{

    try{

        const {message}=req.body;


        if(!message){
            return res.status(400).json({
                message:"Message required"
            });
        }


        const botResponse =
            await chatbotService.getChatbotResponse(message);


        res.json({
            userMessage:message,
            botResponse
        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


export default router;