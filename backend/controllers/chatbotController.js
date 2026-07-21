import {
  getChatbotResponse,
  validateUserMessage
} from "../services/chatbotService.js";


export async function chat(req, res) {

  const { message } = req.body;


  if (!validateUserMessage(message)) {
    return res.status(400).json({
      error: "Invalid message"
    });
  }


  const response = await getChatbotResponse(message);


  res.json({
    message,
    response
  });
}