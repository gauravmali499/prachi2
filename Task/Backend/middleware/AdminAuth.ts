import jwt from "jsonwebtoken"
import { User_Data } from "../models/user"


const AdminAuth = (req: any, res: any, next: any) => {
    jwt.verify(req.cookies.Userdata, `${process.env.SECRET_KEY}`, async (err: any, data: any) => {
        console.log("data", data);
        console.log(req.cookies);


        let email = data.Email
        let role = data.Role
        let id = data.ID

        if (role == "Admin" && email == "admin@gmail.com") {
            const user = await User_Data.findOne({ ID: id })
            console.log(user);

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

export { AdminAuth }