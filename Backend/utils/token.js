const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const user = require("../modules/user");
dotenv.config();

const generatejwt = (id) => {
 const token = jwt.sign({  id: user._id  }, process.env.JWT_SECRET, { expiresIn: '20d' });

  
  return token;
};

exports.generatejwt = generatejwt;
