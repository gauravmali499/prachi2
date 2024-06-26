import { FeedBack_Data } from "../models/feedback"

const PostFeedBack = async (req: any, res: any) => {
    if (!req.body.Option || !req.body.Answer) {
        res.send("Fill all the details")
        res.end()
    }
    else {
        try {
            let FeedBack_ID = Math.floor((Math.random() * 100))
            const User_ID = req.headers.Id
            // let SurveyID = req.params
            const { id, Option, Answer } = req.body
            let SurveyID = id
            const feedback = await FeedBack_Data.create({
                FeedBack_ID, User_ID, SurveyID, Option, Answer
            })
            res.status(200).json({
                "feedback": {
                    feedback
                }
            })
        }
        catch (error: any) {
            res.status(404).json({
                message: error.message
            })
        }
    }
}

const GetFeedBack = async (req: any, res: any) => {
    try {
        const feedback = await FeedBack_Data.find()
        res.status(200).json({ feedback })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

const GetSpecificFeedback = async (req: any, res: any) => {
    const id = req.params.id
    try {
        const feedback = await FeedBack_Data.findOne({ FeedBack_ID: id })
        res.status(200).json({ feedback })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export { PostFeedBack, GetFeedBack, GetSpecificFeedback }