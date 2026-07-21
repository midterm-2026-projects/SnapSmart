import { useState } from "react";


function MessageDisplay({ messages }) {

  return (

    <div
      className="message-display"
      data-testid="message-display"
    >

      {messages.length === 0 ? (

        <p className="empty-message">
          No messages yet.
        </p>

      ) : (

        messages.map((message) => (

          <div
            key={message.id}
            className={
              message.sender === "User"
                ? "message user-message"
                : "message bot-message"
            }
          >

            {message.text}

          </div>

        ))

      )}

    </div>

  );

}





function UserInput({ onSend }) {

  const [input, setInput] = useState("");



  const handleSubmit = (e) => {

    e.preventDefault();


    if (!input.trim()) return;


    onSend(input.trim());


    setInput("");

  };



  return (

    <form
      className="chat-input"
      data-testid="user-input-form"
      onSubmit={handleSubmit}
    >

      <input

        data-testid="user-input"

        placeholder="Ask SnapSmart..."

        value={input}

        onChange={(e) => setInput(e.target.value)}

      />


      <button

        data-testid="send-button"

        type="submit"

      >

        Send

      </button>


    </form>

  );

}





function ChatbotInterface() {


  const [messages, setMessages] = useState([]);





  const handleSend = async (text) => {


    const userMessage = {

      id: Date.now(),

      sender: "User",

      text: text

    };



    const botMessage = {

      id: Date.now() + 1,

      sender: "Bot",

      text: "Message received!"

    };




    // Immediately display messages for testing/UI response

    setMessages((previousMessages) => [

      ...previousMessages,

      userMessage,

      botMessage

    ]);





    try {


      const response = await fetch(

        "http://localhost:3000/api/chatbot",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },


          body: JSON.stringify({

            message: text

          })

        }

      );





      const data = await response.json();





      setMessages((previousMessages) =>

        previousMessages.map((message) =>

          message.id === botMessage.id

            ? {

                ...message,

                text: data.response || "Message received!"

              }

            : message

        )

      );



    } catch (error) {


      console.log(
        "Chatbot server unavailable:",
        error
      );


    }


  };







  return (

    <div

      className="chatbot-container"

      data-testid="chatbot-interface"

    >


      <div className="chatbot-header">


        <div>


          <h2>

            SnapSmart AI Chatbot

          </h2>



          <small>

            Photography Assistant

          </small>



        </div>




        <span>

          ● Online

        </span>



      </div>





      <MessageDisplay

        messages={messages}

      />





      <UserInput

        onSend={handleSend}

      />



    </div>

  );

}



export default ChatbotInterface;