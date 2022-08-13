import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String },
  gender: { type: String },
  grade: { type: String },
  age: { type: String },
  clubs: [{type: String }],
  mmr: { type: Number, default: 1000},
});

const User = mongoose.model("User", userSchema);
export default User;