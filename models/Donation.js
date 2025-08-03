const mongoose = require('mongoose')
const User = require('./User')

const DonationModel=mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    amount:Number,
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Donation',DonationModel)
