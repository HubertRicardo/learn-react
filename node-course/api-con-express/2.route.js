const http = require("node:http");

//comonJS -> modulos clasicos
const dittoJSON = require("./pokemon/ditto.json");

// este es un ejemplo con http bruto sin usar un framework
const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "aplication/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-type ", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }
      break;

    default:
      break;
  }
};

const server = http.createServer(processRequest);

//aqui se llama para que aparesca
server.listen(1234, () => {
  console.log("Server listening on port http://localhost:1234");
});
