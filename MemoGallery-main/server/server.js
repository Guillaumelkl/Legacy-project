const express = require("express");
const protectedRoutes = require("./routes/protectedRoutes");
const freeRoutes = require("./routes/freeRoutes");
const cors = require("cors");
require("./database/dbConnection");

const Port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", freeRoutes);
app.use("/auth", protectedRoutes);


app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
    