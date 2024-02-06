const express = require("express");
require("dotenv").config();

// create express server
const app = express();

// public directory
app.use(express.static("public"));

//routes
//TODO auth // create, login,renew
app.use("/api/auth", require("./routes/auth"));
//TODO CRUDÑ Events

// requests listen
app.listen(process.env.PORT, () => {
  console.log(`server run in port ${process.env.PORT}`);
});
