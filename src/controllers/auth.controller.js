import UserSchema from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    // validate request coming from client
    const { email, firstName, lastName, phone, password } = req.body;

    if (!email || !firstName || !lastName || !phone || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // validate that the user email is not already registered
    const alreadyExistingUser = await UserSchema.findOne({
      email,
    });

    if (alreadyExistingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // validate that the user phone is not already registered
    const alreadyExistingUserPhone = await UserSchema.findOne({
      phone,
    });

    if (alreadyExistingUserPhone) {
      return res
        .status(400)
        .json({ success: false, message: "Phone number already exists" });
    }

    const newUser = await UserSchema.create({
      email,
      firstName,
      lastName,
      phone,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  }

  // check if user exist in our DB
  const user = await UserSchema.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  // validate user password
  if (!(await user.comparePassword(password))) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  console.log("token",process.env.JWT_SECRET_KEY);

  // generate jwt token
  const token = jwt.sign({ id: user._id  }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  // send jwt token to client
  res.status(200).json({
    success: true,
    message: "login successful",
    user: {
      _id: user._id,
      email: user.email,
      firstName:user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address,
      is_admin: user.is_admin,
      is_verified: user.is_verified,
    },
    accessToken: token,
  });
};
