import mongoose from "mongoose"

const FeedbackSchema = new mongoose.Schema({
    FeedBack_ID: {
        type: String,
        unique: true,
        required: [true, "Please enter the Id"],
    },
    User_ID: {
        type: String,
        ref: "UserData_Data"
    },
    SurveyID: {
        type: String,
        ref: "SurveySchema_Data"
    },
    Option: {
        type: String,
        required: [true, "Please enter option"]
    },
    Answer: {
        type: String,
        required: [true, "Please enter answer"]
    },
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

const FeedBack_Data = mongoose.model("FeedBack_Data", FeedbackSchema)

export { FeedBack_Data }