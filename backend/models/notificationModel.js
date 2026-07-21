let notifications = [];


const notificationModel = {


    create: async (data) => {


        const notification = {

            id: notifications.length + 1,

            customerId:
                data.customerId || data.userId,

            recipient:
                data.recipient || "customer",

            message: data.message,

            title:
                data.title || "Notification",

            isRead: false,

            createdAt: new Date()

        };


        notifications.push(notification);


        return notification;

    },



    findByCustomerId: async (customerId) => {


        return notifications.filter(

            (notification) =>

                notification.customerId === Number(customerId)

        );

    },



    findByUserId: async (userId) => {


        return notifications.filter(

            (notification) =>

                notification.customerId === Number(userId)

        );

    },



    findAdminNotifications: async () => {


        return notifications.filter(

            (notification) =>

                notification.recipient === "admin"

        );

    },



    markAsRead: async (id) => {


        const notification =
            notifications.find(

                (notification) =>

                    notification.id === Number(id)

            );



        if (!notification) {

            return null;

        }



        notification.isRead = true;


        return notification;

    }

};


export default notificationModel;