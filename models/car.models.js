const mongoose =require("mongoose");

const carSchema = new mongoose.Schema({
    brand :{
        type:String,
        required:true,
    },
    model :{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    bodyStyle :{
        type:String,
        required:true,
    },
    fuelType:{
        type:String,
        required:true,
    },
    transmission:{
        type:String,
        required:true,
    },
    engine:{
        type:String,
        required:true,
    },
    mileage:{
        type:Number,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    photos:[{
         type:String,
    }],
    inMarket:{
        type:Boolean,
        default:true,
    }
}, { timestamps: true })

const Cars = mongoose.model("Cars",carSchema);

module.exports=Cars