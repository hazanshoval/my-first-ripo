const { Schema, model } = require("mongoose");
const validateEmail = require("../utils/validateEmail");
const validateAge = require("../utils/validateAge");
const bcrypt = require("bcrypt");


const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide an Username"],
    unique: [true, "Username is already exist"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email is already exist"],
    validate: {
      validator: validateEmail,
      message: "Email is invalid",
    },
  },
  firstName: { type: String },
  lastName: { type: String },
  age: {
    type: Number,
    validate: {
        validator: validateAge,
        message: "Age is invalid",
      },
      required: [true, "Please provide an Age"],
  },
  password: { type: String, required: [true, "Please provide a password"] },
  
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.passwordCorrect = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

module.exports = model("Tourist", userSchema);

