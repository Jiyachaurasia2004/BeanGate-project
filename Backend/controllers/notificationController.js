const Notification = require('../modules/notification');
const wrapAsync = require('../utils/wrapAsync');


exports.createNotification = wrapAsync(async (req, res) => {
  const notification = await Notification.create(req.body);
  res.status(201).json({ message: "Notification created", notification });
})
exports.getNotifications = wrapAsync(async (req, res) => {
    try {
        const {clientId, userId} = req.query;
        let filter = {};
        if (clientId) filter.clientId = clientId;
        if (userId) filter.userId = userId;
        const notifications = await Notification.find(filter).sort({ createdAt: -1 });
        res.status(200).json({ notifications });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
})

exports.markAsRead = wrapAsync(async (req, res) => {
    try {
        const note = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
        if (!note) {
            return res.status(404).json({ message: "Notification not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
})

