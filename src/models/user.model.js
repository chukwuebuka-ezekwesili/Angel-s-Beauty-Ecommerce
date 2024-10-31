import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    address:{
        type: String,
        trim: true,
        default: null,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    is_admin:{
        type: Boolean,
        default: false,
    },
    is_verified:{
        type: Boolean,
        default: false,
    }
})

const UserSchema = mongoose.model("User", userSchema)

export default UserSchema