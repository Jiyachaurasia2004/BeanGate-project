const Meeting = require('../modules/meeting');
const wrapAsync = require('../utils/wrapAsync');


exports.createMeeting = wrapAsync(async(req, res) => {
   const { title, date, time, projectId, clientId, agenda } = req.body;
    if (!date) {
        return res.status(400).json({ message: "Date is required" });
    }
    const meeting = await Meeting.create({ title, date, time, projectId, clientId, agenda });
  
    res.status(201).json({message:"Meeting created", meeting});
})

exports.getMeetings = wrapAsync(async(req, res) => {
    try {
        const { projectId, clientId} = req.query;
        let filter = {};
        if (projectId) filter.projectId = projectId;
        if (clientId) filter.clientId = clientId;
        const meetings = await Meeting.find(filter).sort({ date: -1 });
        res.status(200).json({ meetings });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
})