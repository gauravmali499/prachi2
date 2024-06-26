import { SurveySchema_Data } from "../models/survey"

const PostSurvey = async (req: any, res: any) => {
    if (!req.body.Title || !req.body.Description) {
        res.send("Fill all the details")
        res.end()
    }
    else {
        try {
            let SurveyID = Math.floor((Math.random() * 100))
            const { Title, Description } = req.body
            const survey = await SurveySchema_Data.create({
                SurveyID, Title, Description
            })
            res.status(200).json({ survey })
        }
        catch (error: any) {
            res.status(404).json({
                message: error.message
            })
        }
    }
}

const GetSurvey = async (req: any, res: any) => {
    try {
        const survey = await SurveySchema_Data.find()
        res.status(200).json({ survey })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

const GetSpecificSurvey = async (req: any, res: any) => {
    try {
        const id = req.params.id
        const survey = await SurveySchema_Data.findOne({ SurveyID: id })
        res.status(200).json({ survey })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

const UpdateSurvey = async (req: any, res: any) => {
    const id = req.params.id
    try {
        const survey = await SurveySchema_Data.findOneAndUpdate({ SurveyID: id }, req.body, { new: true })
        res.status(200).json({ survey })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

const DeleteSurvey = async (req: any, res: any) => {
    const id = req.params.id
    try {
        const survey = await SurveySchema_Data.findOneAndDelete({ SurveyID: id })
        res.status(200).json({ survey })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export { PostSurvey, GetSurvey, GetSpecificSurvey, UpdateSurvey, DeleteSurvey }