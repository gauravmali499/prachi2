import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({

    User_ID: {
        type: String,
        ref: "User_Data"
    },
    Name: {
        type: String,
        required: [true, "Please enter the name"],
        minlength: [3, "FirstName must contain more than 3 characters"],
    },
    Email: {
        type: String,
        required: [true, "Please enter the email"],
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    Password: {
        type: String,
        required: [true, "Please enter the password"],
        minLength: [6, "Password should be greater than 6 character"],
    },
    ConfirmPassword: {
        type: String,
        required: [true, "Please enter the confirm password"],
        minLength: [6, "Password should be greater than 6 character"],
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

const UserData_Data = mongoose.model("UserData_Data", UserSchema)

export { UserData_Data }