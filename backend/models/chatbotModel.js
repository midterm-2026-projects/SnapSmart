import db from "../config/database.js";


const getAllResponses = async () => {

    const [rows] = await db.query(
        "SELECT * FROM chatbot_responses"
    );

    return rows;
};



const findResponseByKeyword = async (keyword) => {

    const [rows] = await db.query(
        "SELECT response FROM chatbot_responses WHERE keyword LIKE ?",
        [`%${keyword}%`]
    );

    return rows[0];
};



export default {
    getAllResponses,
    findResponseByKeyword
};