let notifications = [];

const notificationModel = {

    create: async (data) => {

        const notification = {
            id: notifications.length + 1,
            message: data.message,
            recipient: data.recipient,
            isRead: false,
            createdAt: new Date()
        };

        notifications.push(notification);

        return notification;
    },


    findAll: async () => {

        return notifications;

    },


    markAsRead: async (id) => {

        const notification = notifications.find(
            (item) => item.id === Number(id)
        );


        if (!notification) {
            return null;
        }


        notification.isRead = true;

        return notification;

    }

};


export default notificationModel;