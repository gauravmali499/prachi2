import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: [true, "Please enter the Id"],
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
    Role: {
        type: String,
        enum: ["User", "Admin"],
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

const User_Data = mongoose.model("User_Data", UserSchema)

export { User_Data }