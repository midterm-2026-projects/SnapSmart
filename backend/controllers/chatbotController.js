const chatbotService =
require("../services/chatbotService");


// POST /api/chatbot/message

const sendMessage = async(req,res)=>{

    try{

        const {message} = req.body;


        const response =
        await chatbotService.getChatbotResponse(message);


        res.status(200).json({

            userMessage: message,
            botResponse: response

        });


    }catch(error){

        res.status(400).json({

            error:error.message

        });

    }

};




// GET /api/chatbot/responses

const getResponses = async(req,res)=>{

    try{

        const responses =
        await chatbotService.getAllResponses();


        res.status(200).json(responses);


    }catch(error){

        res.status(500).json({

            error:error.message

        });

    }

};



module.exports = {

    sendMessage,
    getResponses

};