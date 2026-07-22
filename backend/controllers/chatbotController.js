import {
  getChatbotResponse,
  validateUserMessage
} from "../services/chatbotService.js";


export async function chat(req, res) {

  console.log("Incoming chatbot request:", req.body);


  const { message } = req.body;


  if (!validateUserMessage(message)) {

    return res.status(400).json({
      error: "Invalid message"
    });

  }


  try {

    const response = await getChatbotResponse(message);


    console.log("AI response:", response);


    res.json({

      message,

      response

    });


  } catch(error) {


    console.error(
      "Chatbot error:",
      error.message
    );


    res.status(500).json({

      error:"Chatbot failed"

    });


  }

}
