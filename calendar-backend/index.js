const express = require("express");

// create express server
const app = express();

//routes
app.get("/", (req, res) => {
  console.log("se requiere el /");
  res.json({
    ok: true,
  });
});

// requests listen
app.listen(4000, () => {
  console.log(`server run in port ${4000}`);
});
