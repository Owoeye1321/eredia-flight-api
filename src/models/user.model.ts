import { Document, model, Schema } from "mongoose";
export interface Euser {
  username: string;
  password: string;
}

export default interface UserModel extends Document, Euser {}

const schema = new Schema({
  username: String,
  password: String,
});

export const User = model<UserModel>("user", schema);
