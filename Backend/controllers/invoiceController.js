const Invoice = require('../modules/invoice');
const wrapAsync = require('../utils/wrapAsync');

exports.createInvoice =wrapAsync(async (req, res) => {
    const inv = await Invoice.create(req.body);
    res.status(201).json({message:"Invoice created", invoice:inv});
})

exports.getInvoices = wrapAsync(async (req, res) => {
    try {
        const { projectId, clientId} = req.query;
        let filter = {};
        if (projectId) filter.projectId = projectId;
        if (clientId) filter.clientId = clientId;
        const invoices = await Invoice.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ invoices });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
   
})