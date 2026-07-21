import supabase from "../config/supabaseClient.js";


const notificationDatabaseModel = {


    create: async(data)=>{


        const { data: result, error } =
            await supabase
            .from("notifications")
            .insert([
                {
                    user_id:data.userId,
                    title:data.title,
                    message:data.message,
                    is_read:false
                }
            ])
            .select()
            .single();


        if(error){
            throw error;
        }


        return result;

    },



    findByUserId: async(userId)=>{


        const { data, error } =
            await supabase
            .from("notifications")
            .select("*")
            .eq(
                "user_id",
                userId
            );


        if(error){
            throw error;
        }


        return data;

    },



    updateReadStatus: async(id)=>{


        const { data,error } =
            await supabase
            .from("notifications")
            .update({
                is_read:true
            })
            .eq(
                "id",
                id
            )
            .select()
            .single();



        if(error){
            throw error;
        }


        return data;

    }


};


export default notificationDatabaseModel;