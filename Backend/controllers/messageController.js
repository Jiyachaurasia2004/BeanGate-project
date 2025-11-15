const Message = require('../modules/message');
const wrapAsync = require('../utils/wrapAsync');


exports.sendMessage = wrapAsync(async(req, res) => {
    try {
        console.log("req.user:", req.user);

       const { receiverId, message } = req.body;

      if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: sender not found" });
     }
        const msg = await Message.create({
        senderId: req.user.id,
        receiverId,
        message
      
    })
    console.log(msg);
    
    res.status(200).json({message: "Message sent successfully", revicerId, text});
    } catch (error) {
        res.status(500).json({message: "Error while sending message", error: error.message});
    }
  
})

exports.getMessages = wrapAsync(async(req, res) => {
    try {
        const {projectId,userId} = req.query;
        const filter = {projectId, $or: [{senderId: userId}, {receiverId: userId}]};
        const messages = await Message.find(filter).populate('senderId receiverId', 'username email').sort({createdAt: 1});
        res.status(200).json({message: "Messages fetched successfully", messages});
    } catch (error) {
        res.status(500).json({message: "Error while fetching messages", error: error.message});
    }
})