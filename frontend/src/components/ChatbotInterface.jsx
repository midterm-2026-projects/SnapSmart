import { useState } from "react";


function MessageDisplay({ messages }) {

  return (

    <div className="message-display">

      {messages.length === 0 ? (

        <p className="empty-message">
          Start a conversation...
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



    setMessages((previousMessages) => [

      ...previousMessages,

      userMessage

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




      const botMessage = {

        id: Date.now() + 1,

        sender: "Bot",

        text: data.response || "No response received."

      };




      setMessages((previousMessages) => [

        ...previousMessages,

        botMessage

      ]);



    } catch (error) {


      const errorMessage = {

        id: Date.now() + 1,

        sender: "Bot",

        text: "Unable to connect to chatbot server."

      };



      setMessages((previousMessages) => [

        ...previousMessages,

        errorMessage

      ]);


    }


  };





  return (

    <div className="chatbot-container">


      <div className="chatbot-header">

        <div>

          <h2>
            SnapSmart AI
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