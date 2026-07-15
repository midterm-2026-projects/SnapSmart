import {
  getChatbotResponse,
  validateUserMessage,
} from "../services/chatbotService.js";

export async function chat(req, res) {
  try {
    const { message } = req.body;

    if (!validateUserMessage(message)) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const response = await getChatbotResponse(message);

    res.status(200).json({
      response,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}