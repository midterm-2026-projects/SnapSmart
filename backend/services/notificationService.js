import notificationModel from "../models/notificationModel.js";


export const createNotification = async(data)=>{


    if(!data.message || !data.recipient){

        throw new Error(
            "Message and recipient are required"
        );

    }


    return await notificationModel.create(data);

};



export const getNotifications = async()=>{


    return await notificationModel.findAll();


};



export const markAsRead = async(id)=>{


    const notification =
        await notificationModel.markAsRead(id);


    if(!notification){

        throw new Error(
            "Notification not found"
        );

    }


    return notification;

};