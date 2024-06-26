import express from "express"
import { GetUsers, Signup } from "../controller/Signup"
import { Signin } from "../controller/Signin"
import { DeleteSurvey, GetSurvey, PostSurvey, UpdateSurvey } from "../controller/Survey"
import { AdminAuth } from "../middleware/AdminAuth"
import { GetFeedBack, GetSpecificFeedback, PostFeedBack } from "../controller/Feedback"
import { UserAuth } from "../middleware/UserAuth"
const router = express.Router()

router.route("/signup").post(Signup)
router.route("/signin").post(Signin)
router.route("/getusers").get(GetUsers)
router.route("/addsurvey").post(AdminAuth, PostSurvey)
router.route("/getsurvey").get(GetSurvey)
router.route("/updatesurvey/:id").put(AdminAuth, UpdateSurvey)
router.route("/deletesurvey/:id").delete(AdminAuth, DeleteSurvey)
router.route("/postfeedback").post(UserAuth, PostFeedBack)
router.route("/getfeedback").get(AdminAuth, GetFeedBack)
router.route("/getfeedback/:id").get(UserAuth, GetSpecificFeedback)

export { router }