const { Schema, model } = require("mongoose")

const cntSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    loc : {
        type : String,
        // required : true,
        enum : ["mobile", "sim", "email"]
    },
    
    phone: {
        type: String,
        required: true,
        unique: true,
    },
})
module.exports = model("contact", cntSchema)