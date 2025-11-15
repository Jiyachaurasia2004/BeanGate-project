const mongoose = require('mongoose');   

const invoiceSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    amount: {
        type: Number,
        required: true
    },
      status: {   
        type: String,
        enum: ['paid', 'unpaid', 'overdue'],
        default: 'unpaid'
    },
    date:{
        type: Date,
        default: Date.now
    },
  
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);