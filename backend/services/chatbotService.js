const getChatbotResponse = async (message) => {

    if (!message || message.trim() === "") {
        throw new Error("Message cannot be empty");
    }


    return "Hello! I am your AI photography assistant. How can I help you today?";

};


export default {
    getChatbotResponse
};git