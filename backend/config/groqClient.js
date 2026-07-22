import "dotenv/config";
import Groq from "groq-sdk";


console.log(
    "GROQ KEY:",
    process.env.GROQ_API_KEY?.slice(0,10)
);


const groq = new Groq({

    apiKey:
    process.env.GROQ_API_KEY

});


export default groq;
