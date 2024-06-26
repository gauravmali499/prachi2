import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    Question: [
        {
            type: String,
            required: true
        }
    ],
    //surveyId
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

const Question_Data = mongoose.model("Question_Data", QuestionSchema)

export { Question_Data }