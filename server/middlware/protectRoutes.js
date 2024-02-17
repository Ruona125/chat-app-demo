import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthorized, no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "unauthorized, invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    req.user = user
    next()
  } catch (error) {
    console.log("Error in protected routes", error);
    res.status(500).json("Internal server error");
  }
};

export default protectRoute
