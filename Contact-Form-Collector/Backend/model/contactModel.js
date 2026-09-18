import mongoose from "mongoose";
const contactShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required: true,
        maxlength: 10
    },
    message: {
        type: String,
        minlength: 4
    }
})
const Contact=new mongoose.model("Contact",contactShema);
export default Contact;
