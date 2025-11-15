const mongoose = require('mongoose');
const meetingSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        required: true
    },
    time:{
        type: String,
    },
    agenda: {
        type: String,
    },
   attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
  
}, { timestamps: true });

module.exports = mongoose.model('Meeting', meetingSchema);
