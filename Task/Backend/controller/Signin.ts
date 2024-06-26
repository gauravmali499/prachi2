import { User_Data } from "../models/user"
import jwt from "jsonwebtoken"
import "dotenv/config"


const Signin = async (req: any, res: any, next: any) => {
    // console.log("hello");
    // console.log(req.body);
    if (!req.body.Email) {
        res.send("Email is required")
        res.end()
    }
    else if (!req.body.Password) {
        res.send("Password is required")
        res.end()
    }
    // message: "User signin successfully"
    else {
        try {
            const user = await User_Data.findOne({ Email: req.body.Email, Password: req.body.Password });

            if (user) {
                const data = { ID: user.ID, Email: req.body.Email, Password: req.body.Password, Role: user.Role }
                const token = jwt.sign(data, `${process.env.SECRET_KEY}`, { expiresIn: "1h" })
                res.cookie("Userdata", token)
                res.status(200).send({ data: data, statuscode: 200, token })
                console.log(token);
                console.log(data);
            }
            else {
                res.status(400).json({
                    error: "User doesn't exist"
                })
            }
        }
        catch (error: any) {
            res.status(404).json({ error })
        }
    }
}

export { Signin }