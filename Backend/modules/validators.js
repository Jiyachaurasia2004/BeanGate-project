const {z} = require('zod');


const loginSchema = z.object({
    email: z.string({required_error: "Email is requried"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, "email should be at least 3 characters long")
    .max(200, "email should be at most 30 characters long"),
    password: z.string({required_error: "password is requried"})
    .trim()
    .min(5, "password should be at least 3 characters long")
    .max(200, "password should be at most 30 characters long"),
})
const newPasswordSchema = loginSchema.extend({
 
     confirmPassword: z.string({required_error: "confirm password is requried"})
    .trim()
    .min(5, "confirm password should be at least 3 characters long")
    .max(200, "confirm password should be at most 30 characters long"),
})
const registerSchema =newPasswordSchema.extend({
    username: z.string({required_error: "Name is requried"})
    .trim()
    .min(3, "Username should be at least 3 characters long")
    .max(30, "Username should be at most 30 characters long"),
  
    phone: z.string({required_error: "phone number is requried"})
    .trim()
    .min(10, "phone number should be at least 10 characters long")
    .max(15, "phone number should be at most 15 characters long"),
  
    confirmPassword: z.string({required_error: "confirm password is requried"})
    .trim()
    .min(5, "confirm password should be at least 3 characters long")
    .max(200, "confirm password should be at most 30 characters long"),
});

module.exports =  {registerSchema,loginSchema,newPasswordSchema}; 