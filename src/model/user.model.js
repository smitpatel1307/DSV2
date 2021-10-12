import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phno: { type: Number, required: true },
});

const User = new model("User", userSchema);

export default User;
