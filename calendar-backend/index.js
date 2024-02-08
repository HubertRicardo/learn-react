const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

// create express server
const app = express();

//Base de datos
dbConnection();

// public directory
app.use(express.static("public"));

//leactura y parseo del body
app.use(express.json());

//routes
//TODO auth // create, login,renew
app.use("/api/auth", require("./routes/auth"));
//TODO CRUDÑ Events

// requests listen
app.listen(process.env.PORT, () => {
  console.log(`server run in port ${process.env.PORT}`);
});
