const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //search for provided email in database
    const user = await User.findOne({ email });

    //if the email is not found , return
    if (!user) {
      return res.status(401).send({ message: "Can't verify email..." });
    }

    //if the email is found , compare the entered password against the password in the database
    const validPassword = await bcrypt.compare(password, user.password);

    //if passwords don't match, return
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }

    //else , Respond with a token
    const token = jwt.sign({id : user._id , email : user.email} , PRIVATE_KEY);
    res.status(200).send(token);

  } catch (error) {
    res.status(500).send({ message: "Unable to Log in..." });
  }
};
 
module.exports = loginUser;
