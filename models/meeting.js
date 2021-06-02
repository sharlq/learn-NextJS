import mongoose from 'mongoose'

const MODEL_NAME = "myMeetings"
const meeting = new mongoose.Schema({
    image:String,
    title:String,
    address:String
})

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, meeting,'meetings')