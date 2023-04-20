const mongoose = require("mongoose");
require("dotenv").config();
const URI =process.env.DB_URI

async function main() {
  await mongoose.connect(URI);
}
main()
  .then(() => console.log("db connected succesfully!"))
  .catch((err) => console.log(err));

module.exports = main;
