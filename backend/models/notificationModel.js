import supabase from "../config/supabaseClient.js";


const notificationModel = {



    create: async (data) => {


        const notification = {

            user_id:
                data.userId ||
                data.customerId,


            title:
                data.title ||
                "Notification",


            message:
                data.message,


            is_read:
                false

        };



        const {
            data: result,
            error
        } =
            await supabase
            .from("notifications")
            .insert([
                notification
            ])
            .select()
            .single();



        if(error){

            console.log(
                "SUPABASE CREATE ERROR:",
                error.message
            );

            throw error;

        }



        return result;


    },





    findByCustomerId: async(customerId)=>{


        const {
            data,
            error
        } =
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


        const {
            data,
            error
        } =
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