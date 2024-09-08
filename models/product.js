const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createedAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","mi","dell"],
            message:`{VALUE} is not supported`,
        },
    },


});

module.exports = mongoose.model("Product",product_Schema);