import supabase from "./supabaseClient";


async function testSupabase(){

    const {
        data,
        error
    } = await supabase
        .from("profiles")
        .select("*")
        .limit(1);


    console.log("DATA:", data);
    console.log("ERROR:", error);

}


testSupabase();