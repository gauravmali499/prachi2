import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema({
    SurveyID: {
        type: String,
        unique: true,
        required: [true, "Please enter the Id"],
    },
    Title: {
        type: String,
        unique: true,
        required: [true, "Please enter the title"],
    },
    Description: {
        type: String,
        required: [true, "Please enter description"]
    },
    //userId
    CreatedBy: {
        type: String,
        default: "Prachi"
    },
    ModifiedBy: {
        type: String,
        default: "Prachi"
    },
    CreatedAt: {
        type: Date,
        default: new Date
    },
    ModifiedAt: {
        type: Date,
        default: new Date
    }
}, { timestamps: true })

const SurveySchema_Data = mongoose.model("SurveySchema_Data", SurveySchema)

export { SurveySchema_Data }