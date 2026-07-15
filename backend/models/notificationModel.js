let notifications = [];

const notificationModel = {

    create: async (data) => {

        const notification = {
            id: notifications.length + 1,
            customerId: data.customerId,
            recipient: data.recipient, // "admin" or "customer"
            message: data.message,
            isRead: false,
            createdAt: new Date()
        };

        notifications.push(notification);

        return notification;

    },


    findByCustomerId: async (customerId) => {

        return notifications.filter(
            (notification) =>
                notification.customerId === Number(customerId) &&
                notification.recipient === "customer"
        );

    },


    findAdminNotifications: async () => {

        return notifications.filter(
            (notification) =>
                notification.recipient === "admin"
        );

    },


    markAsRead: async (id) => {

        const notification = notifications.find(
            (notification) => notification.id === Number(id)
        );

        if (!notification) {
            return null;
        }

        notification.isRead = true;

        return notification;

    }

};

export default notificationModel;