const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true
    },
    readStatus:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });
module.exports = mongoose.model('Notification', notificationSchema);