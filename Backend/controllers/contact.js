
const Contect = require('../modules/contact');
const wrapAsync = require('../utils/wrapAsync');


 const submitContactForm = wrapAsync(async (req, res) => {
    try {
        const { name, email, phone, subject,company, message } = req.body;
        const newContact = await Contect.create({
            name, email, phone, subject,company, message
        });
        res.status(201).json({
            message: "Contact form submitted successfully",
        })

    } catch (error) {
        console.log(erro);
        
    }
})
exports.submitContactForm = submitContactForm;