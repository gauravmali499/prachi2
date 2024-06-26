import validator from "validator";
import { User_Data } from "../models/user";
// import { UserData_Data } from "../models/userdata";

async function CreateAdmin() {
    const admin = new User_Data({
        ID: "1",
        Name: "Admin",
        Email: "admin@gmail.com",
        Role: "Admin",
        Password: "Admin@0203",
        ConfirmPassword: "Admin@0203"
    })

    const add = await admin.save()
}

const Signup = async (req: any, res: any) => {
    const ValidatePassword = (password: any) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
        if (!regex.test(password)) {
            return false;
        }
        else {
            return true;
        }
    }

    if (!req.body.Name || !req.body.Email || !req.body.Password || !req.body.ConfirmPassword) {
        res.send("Fill all the details")
        res.end()
    }
    else if (!validator.isEmail(req.body.Email)) {
        res.send("Email should be valid")
        res.end()
    }
    else if (!ValidatePassword(req.body.Password)) {
        res.send("Password is not valid")
        res.end()
    }
    else if (!ValidatePassword(req.body.ConfirmPassword)) {
        res.send("Password is not valid")
        res.end()
    }
    else if (!(req.body.Password == req.body.ConfirmPassword)) {
        res.send("Confirm Password does not match to Password")
        res.end()
    }
    else {
        try {
            let ID = Math.floor((Math.random() * 100))
            let role;
            const { Name, Email, Role, Password, ConfirmPassword } = req.body
            if (Email == "admin@gmail.com") {

                role = "Admin"
            }
            else {
                role = "User"
            }
            const user = await User_Data.create({
                ID, Name, Email, Role: role, Password, ConfirmPassword
            })
            // if (req.body.Role == "User") {
            //     const { Name, Email, Role, Password, ConfirmPassword } = req.body
            //     const user = await UserData_Data.create({
            //         ID, Name, Email, Role, Password, ConfirmPassword
            //     })
            // }
            res.status(200).json({
                user

            })
        }
        catch (error: any) {
            res.status(404).json({
                message: error.message
            })
        }
    }
}

const GetUsers = async (req: any, res: any) => {
    try {
        const users = await User_Data.find()
        res.status(200).json({ users })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export { Signup, GetUsers }