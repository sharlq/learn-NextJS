import mongoose from 'mongoose'

const meeting = new mongoose.Schema({
    image:String,
    title:String,
    address:String
})

export default mongoose.model('meetings', meeting)