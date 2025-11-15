const { status, start } = require('init');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    },
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    assignedTeam:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {timestamps: true}); 

const Project = new mongoose.model('Project', projectSchema);
module.exports = Project;
