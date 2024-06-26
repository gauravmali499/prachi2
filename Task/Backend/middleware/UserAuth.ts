import jwt from "jsonwebtoken"
import { User_Data } from "../models/user"


const UserAuth = (req: any, res: any, next: any) => {
    jwt.verify(req.cookies.Userdata, `${process.env.SECRET_KEY}`, async (err: any, data: any) => {
        let role = data.Role
        let id = data.ID
        if (role == "User") {
            const user = await User_Data.findOne({ ID: id })
            req.headers = ({ ...req.headers, Id: id })

            if (user) {
                next()
            }
            else {
                res.status(404).send("User Doesn't exist")
                res.end()
            }
        }
        else {
            res.status(400).send("User not authorised to proceed!!")
        }
    })
}

export { UserAuth }