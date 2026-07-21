import supabase from "../config/supabaseClient.js";


const notificationModel = {


    create: async(data)=>{


        const { data: result, error } =
            await supabase
            .from("notifications")
            .insert([
                {
                    user_id: data.userId || data.customerId,
                    title: data.title,
                    message: data.message,
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




    findByCustomerId: async(customerId)=>{


        const { data, error } =
            await supabase
            .from("notifications")
            .select("*")
            .eq(
                "user_id",
                customerId
            )
            .order(
                "created_at",
                {
                    ascending:false
                }
            );



        if(error){
            throw error;
        }


        return data;

    },




    findByUserId: async(userId)=>{


        return await notificationModel.findByCustomerId(
            userId
        );


    },




    markAsRead: async(id)=>{


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


export default notificationModel;