import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";
export const authorization = async (req: any, res: any, next: any) => {
  try {
    const bearer = req.headers.authorization;
    const bearerToken = bearer?.split(" ");
    const token = bearerToken && bearerToken![1];
    if (!token)
      return res.status(401).send({ success: false, message: "Invalid token" });
    const user = await jwt.verify(token, SECRET_KEY);
    if (!user)
      return res.status(401).send({
        success: false,
        message: "Unauthorized user",
      });
    return next();
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
