import {
    createNotification,
    getNotificationsByCustomer,
    markAsRead
} from "../services/notificationService.js";


export const createNotificationController = async (req, res) => {

    try {

        console.log("BODY:", req.body);


        const notification =
            await createNotification(req.body);



        console.log(
            "SUCCESS:",
            notification
        );


        return res.status(201).json({

            success:true,

            data:notification

        });



    } catch(error) {


        console.log(
            "ERROR OBJECT:",
            error
        );


        return res.status(400).json({

            success:false,

            message:error.message

        });


    }

};




// Get Customer Notifications
export const getNotificationsController = async (req, res) => {

    try {


        const notifications =
            await getNotificationsByCustomer(
                req.params.customerId
            );



        return res.status(200).json({

            success: true,

            data: notifications

        });



    } catch (error) {


        console.log(
            "GET NOTIFICATION ERROR:",
            error.message
        );



        return res.status(400).json({

            success:false,

            message:error.message

        });


    }

};




// Mark Notification as Read
export const markAsReadController = async (req, res) => {

    try {


        const notification =
            await markAsRead(
                req.params.id
            );



        return res.status(200).json({

            success:true,

            data:notification

        });



    } catch(error) {


        console.log(
            "MARK READ ERROR:",
            error.message
        );



        return res.status(404).json({

            success:false,

            message:error.message

        });


    }

};