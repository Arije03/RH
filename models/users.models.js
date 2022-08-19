const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    username: "string",
    password: "string",
    role: "string",
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserModel);