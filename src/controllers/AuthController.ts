import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";
import ApiError from "../utils/apiError";
export class Authentication {
  login = async (req: any, res: any, next: any) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      if (user) {
        const isValidUser = await bcrypt.compare(password, user.password);
        if (isValidUser) {
          const token = jwt.sign(req.body, SECRET_KEY);
          return res.status(200).send({
            success: true,
            message: "Logged in successfully",
            token: token,
          });
        } else {
          return res
            .status(400)
            .send({ success: false, message: "Invalid username or password" });
        }
      } else {
        return res
          .status(400)
          .send({ success: false, message: "Invalid username or password" });
      }
    } catch (error: any) {
      next(error);
      throw new ApiError(error.status, error.message);
    }
  };
  create = async (req: any, res: any, next: any) => {
    try {
      const { username, password } = req.body;
      //check if the username exist
      if (await User.findOne({ username: username }))
        return res
          .status(400)
          .send({ success: false, message: "Username has already been taken" });
      //generate salt for hasing
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //cerate a new instant and save user
      const user = new User({ username: username, password: hashedPassword });
      await user.save();
      const token = jwt.sign(req.body, SECRET_KEY);
      return res.status(200).send({
        success: true,
        message: "Signed up successfully",
        token: token,
      });
    } catch (error: any) {
      next(error);
      throw new ApiError(error.status, error.message);
    }
  };
}
