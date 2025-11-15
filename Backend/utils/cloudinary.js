const cloudinary = require("cloudinary").v2;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
 cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
const clouduploadImage = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }
        const result = await cloudinary.uploader.upload(filePath);

    console.log(result);
    fs.unlinkSync(filePath);
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(filePath);
    console.log("image upload",error);
    return null;
  }
};
module.exports = { clouduploadImage };
