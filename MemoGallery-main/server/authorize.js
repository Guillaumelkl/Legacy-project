const jwt = require("jsonwebtoken");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE;

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: "Can't find token..." });
    }
    const token = await req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).send({ message: "Token not valid..."});
    }
    let validToken = jwt.verify(token, PRIVATE_KEY);

    if (!validToken) {
      return res.send({ message: "Can't verify token..." });
    }

    req.user = validToken;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
