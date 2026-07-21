import supabase from "../config/supabaseClient.js";


export async function searchResponseByKeyword(keyword) {

    const { data, error } = await supabase
        .from("chatbot_responses")
        .select("*")
        .ilike("keyword", `%${keyword}%`)
        .limit(1);


    if (error) {
        throw error;
    }


    return data?.[0] || null;
}