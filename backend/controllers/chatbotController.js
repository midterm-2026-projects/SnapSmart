import chatbotService from "../services/chatbotService.js";


const sendMessage = async (req, res) => {

    try {

        const { message } = req.body;


        const isValid =
            chatbotService.validateUserMessage(message);


        if (!isValid) {

            return res.status(400).json({
                message: "Invalid chatbot message"
            });

        }


        const response =
            await chatbotService.getChatbotResponse(message);



        res.status(200).json({

            userMessage: message,
            botResponse: response

        });



    } catch(error) {

        res.status(500).json({

            error: error.message

        });

    }

};



export default {
    sendMessage
};