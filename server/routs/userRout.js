const express = require("express");
const jwt = require("jsonwebtoken");
const { create } = require("../schema/user");
const User = require("../schema/user");
const classError =require("../error/classError")
const router = express.Router();

function generateToken({ _id }) {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET);
}

router.post("/register", async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);
      newUser.password = undefined;
      const token = generateToken(newUser);
      console.log(token)
      res.status(200).json({token})
    } catch (error) { 
      next(error.message,400);
    }
  });
router.post("/login", async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        next(new classError("Please provide username and password",404));
  
      const user = await User.findOne({ username });
      
  
      if (!(await user.passwordCorrect(password)))
        return next(new classError("Password doesn't match",401));
        const token = generateToken(user);
        res.status(200).json({token,username})
    } catch (error) {
      next(new classError("UserName isnt correct",401));
    }
  });

module.exports = router;