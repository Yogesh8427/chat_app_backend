import jwt from "jsonwebtoken";
import userModel from "../../Models/user.js";

const userauth = async (req, res, next) => {
    console.log("authentication is working")
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "please login" });
    }

    const decodedata = jwt.verify(token, "Nikhil");
    const { userid } = decodedata;
    const user = await userModel.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    req.user=user
    next();
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
export default userauth;
