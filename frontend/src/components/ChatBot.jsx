import { useState } from "react";
import "./ChatBot.css";


function ChatBot(){


const [open,setOpen]=useState(false);

const [message,setMessage]=useState("");

const [messages,setMessages]=useState([]);



async function sendMessage(){


if(!message.trim())
return;



const userMessage=message;



setMessages(prev=>[
...prev,
{
sender:"user",
text:userMessage
}
]);



setMessage("");



try{


const res=await fetch(

"http://localhost:3000/api/chatbot",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

message:userMessage

})


}

);



const data=await res.json();



setMessages(prev=>[

...prev,

{

sender:"bot",

text:data.response

}

]);



}catch(error){


console.error(
"Chat error:",
error
);


}



}



return(

<>


<button

className="chat-button"

onClick={()=>setOpen(!open)}

>

🤖

</button>



{

open &&

<div className="chat-box">


<div className="chat-header">

SnapSmart AI

</div>



<div className="chat-body">


{

messages.map((msg,index)=>(


<div

key={index}

className={msg.sender}

>

{msg.text}


</div>


))


}


</div>



<div className="chat-input">


<input


value={message}


onChange={
e=>setMessage(e.target.value)
}


placeholder="Ask SnapSmart AI..."


onKeyDown={
e=>{
if(e.key==="Enter")
sendMessage();
}
}


/>



<button

onClick={sendMessage}

>

Send

</button>


</div>



</div>


}



</>

);


}


export default ChatBot;
