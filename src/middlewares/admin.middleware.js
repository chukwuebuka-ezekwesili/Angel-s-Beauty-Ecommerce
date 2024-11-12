import jwt from "jsonwebtoken";
import UserSchema from "../models/user.model.js";
import dotenv from 'dotenv'

dotenv.config();
export const adminMiddleware = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    console.log("authHeaders", authHeaders);
    if (!authHeaders || !authHeaders.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized, token not provided" });
    }

    const token = authHeaders.split(" ")[1];
    console.log('token', token);
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized, token not provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await UserSchema.findById(decoded.id);
    
    if (!user || !user.is_admin) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized, not an admin" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in admin middleware:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
